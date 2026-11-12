package com.limupy.limuconnect.client;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.limupy.limuconnect.LimuConnectMod;
import com.mojang.logging.LogUtils;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.time.Instant;
import java.util.Collections;
import java.util.Set;
import java.util.WeakHashMap;
import java.util.regex.Pattern;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.components.events.GuiEventListener;
import net.minecraft.client.gui.screens.multiplayer.JoinMultiplayerScreen;
import net.minecraft.client.gui.screens.multiplayer.ServerSelectionList;
import net.minecraft.client.multiplayer.ServerData;
import net.minecraft.client.multiplayer.ServerList;
import net.neoforged.api.distmarker.Dist;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.client.event.ScreenEvent;
import org.slf4j.Logger;

@EventBusSubscriber(
        modid = LimuConnectMod.MOD_ID,
        bus = EventBusSubscriber.Bus.GAME,
        value = Dist.CLIENT
)
public final class ClientEvents {
    private static final Logger LOGGER = LogUtils.getLogger();
    private static final String SERVER_NAME = "Limu Minecraft";

    /*
     * Last verified address is only a bootstrap fallback. Once the public
     * directory responds, the current address replaces it automatically.
     */
    private static final String FALLBACK_SERVER_ADDRESS = "d-op3qhdxcx76-1.steam";
    private static final URI STATUS_URI = URI.create(
            "https://limupy.github.io/vpn/limu/connect.json"
    );
    private static final Pattern E4STEAM_ADDRESS = Pattern.compile(
            "^(?:d-[a-z0-9-]+|[a-z0-9-]+)\\.steam$",
            Pattern.CASE_INSENSITIVE
    );
    private static final HttpClient HTTP = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(5))
            .followRedirects(HttpClient.Redirect.NORMAL)
            .build();

    /*
     * One refresh per multiplayer screen instance. A weak set avoids retaining
     * closed screens and prevents re-entry when the list is refreshed.
     */
    private static final Set<JoinMultiplayerScreen> REFRESHED_SCREENS =
            Collections.newSetFromMap(new WeakHashMap<>());

    private ClientEvents() {}

    @SubscribeEvent
    public static void onScreenInit(ScreenEvent.Init.Post event) {
        if (!(event.getScreen() instanceof JoinMultiplayerScreen screen)) {
            return;
        }
        if (!REFRESHED_SCREENS.add(screen)) {
            return;
        }

        Minecraft minecraft = Minecraft.getInstance();
        ServerList servers = screen.getServers();

        /*
         * Show a normal vanilla entry immediately. Most importantly, do not
         * delete the saved entry while the network request is still pending:
         * GitHub may be unreachable on some clients, but the last known address
         * must remain visible and usable.
         */
        ensureLimuEntry(servers);
        servers.save();
        refreshVisibleList(screen, servers);

        HttpRequest request = HttpRequest.newBuilder(STATUS_URI)
                .timeout(Duration.ofSeconds(8))
                .header("Accept", "application/json")
                .header("Cache-Control", "no-cache")
                .header("User-Agent", "LimuConnect/1.1.1 Minecraft/1.21.1")
                .GET()
                .build();

        HTTP.sendAsync(request, HttpResponse.BodyHandlers.ofString())
                .thenApply(response -> {
                    if (response.statusCode() != 200) {
                        throw new IllegalStateException(
                                "Limu directory HTTP " + response.statusCode()
                        );
                    }
                    return parseCurrentServer(response.body());
                })
                .whenComplete((server, error) -> minecraft.execute(() -> {
                    if (error != null) {
                        LOGGER.warn(
                                "[Limu Connect] Directory refresh failed; keeping the last known server address",
                                error
                        );
                        return;
                    }
                    if (server == null) {
                        LOGGER.warn(
                                "[Limu Connect] Directory has no fresh connected address; keeping the last known server address"
                        );
                        return;
                    }

                    setLimuAddress(servers, server.address());
                    servers.save();

                    if (minecraft.screen == screen) {
                        refreshVisibleList(screen, servers);
                    }
                    LOGGER.info(
                            "[Limu Connect] Server entry updated: {}",
                            server.address()
                    );
                }));
    }

    private static void ensureLimuEntry(ServerList servers) {
        ServerData retained = null;

        // Keep one existing entry, removing duplicates only.
        for (int i = servers.size() - 1; i >= 0; i--) {
            ServerData entry = servers.get(i);
            if (!SERVER_NAME.equals(entry.name)) {
                continue;
            }
            if (retained == null) {
                retained = entry;
            } else {
                servers.remove(entry);
            }
        }

        // A previous failed refresh may have erased the entry in older builds.
        if (retained == null) {
            retained = new ServerData(
                    SERVER_NAME,
                    FALLBACK_SERVER_ADDRESS,
                    ServerData.Type.OTHER
            );
            servers.add(retained, false);
        }

        moveToTop(servers, retained);
    }

    private static void setLimuAddress(ServerList servers, String address) {
        removeLimuEntries(servers);
        ServerData entry = new ServerData(
                SERVER_NAME,
                address,
                ServerData.Type.OTHER
        );
        servers.add(entry, false);
        moveToTop(servers, entry);
    }

    private static void moveToTop(ServerList servers, ServerData entry) {
        for (int i = 0; i < servers.size(); i++) {
            if (servers.get(i) == entry) {
                if (i > 0) {
                    servers.swap(i, 0);
                }
                return;
            }
        }
    }

    private static void removeLimuEntries(ServerList servers) {
        for (int i = servers.size() - 1; i >= 0; i--) {
            if (SERVER_NAME.equals(servers.get(i).name)) {
                servers.remove(servers.get(i));
            }
        }
    }

    private static void refreshVisibleList(
            JoinMultiplayerScreen screen,
            ServerList servers
    ) {
        for (GuiEventListener child : screen.children()) {
            if (child instanceof ServerSelectionList list) {
                list.updateOnlineServers(servers);
                return;
            }
        }
    }

    private static ServerEndpoint parseCurrentServer(String body) {
        try {
            JsonObject object = JsonParser.parseString(body).getAsJsonObject();
            String state = getString(object, "state", "offline");
            String address = getString(object, "address", "");
            String timestamp = getString(
                    object,
                    "generated_at",
                    getString(object, "updated_at", "")
            );

            boolean connected = ("online".equalsIgnoreCase(state)
                    || "connected".equalsIgnoreCase(state))
                    && getBoolean(object, "connected", true);
            if (!connected || !E4STEAM_ADDRESS.matcher(address).matches()) {
                return null;
            }

            Instant updated = Instant.parse(timestamp);
            long ageSeconds = Duration.between(updated, Instant.now()).toSeconds();
            // Tolerate modest clock skew, but never replace a good entry with stale data.
            if (ageSeconds < -600 || ageSeconds > 900) {
                return null;
            }

            return new ServerEndpoint(address);
        } catch (Exception ignored) {
            return null;
        }
    }

    private static String getString(
            JsonObject object,
            String name,
            String fallback
    ) {
        try {
            return object.has(name) && !object.get(name).isJsonNull()
                    ? object.get(name).getAsString()
                    : fallback;
        } catch (Exception ignored) {
            return fallback;
        }
    }

    private static boolean getBoolean(
            JsonObject object,
            String name,
            boolean fallback
    ) {
        try {
            return object.has(name) && !object.get(name).isJsonNull()
                    ? object.get(name).getAsBoolean()
                    : fallback;
        } catch (Exception ignored) {
            return fallback;
        }
    }

    private record ServerEndpoint(String address) {}
}
