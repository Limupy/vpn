package com.limupy.limuconnect.client;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.limupy.limuconnect.LimuConnectMod;
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

@EventBusSubscriber(
        modid = LimuConnectMod.MOD_ID,
        bus = EventBusSubscriber.Bus.GAME,
        value = Dist.CLIENT
)
public final class ClientEvents {
    private static final String SERVER_NAME = "Limu Minecraft";
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

        // Never leave an old e4steam session address visible while refreshing.
        removeLimuEntries(servers);
        servers.save();
        refreshVisibleList(screen, servers);

        HttpRequest request = HttpRequest.newBuilder(STATUS_URI)
                .timeout(Duration.ofSeconds(8))
                .header("Accept", "application/json")
                .header("Cache-Control", "no-cache")
                .header("User-Agent", "LimuConnect/1.1.0 Minecraft/1.21.1")
                .GET()
                .build();

        HTTP.sendAsync(request, HttpResponse.BodyHandlers.ofString())
                .thenApply(response -> {
                    if (response.statusCode() != 200) {
                        throw new IllegalStateException("Limu directory HTTP " + response.statusCode());
                    }
                    return parseCurrentServer(response.body());
                })
                .whenComplete((server, error) -> minecraft.execute(() -> {
                    if (error != null || server == null) {
                        return;
                    }

                    // Use Minecraft's own persistent server list. The row is a
                    // normal ServerData entry, so it gets vanilla ping/render/join.
                    removeLimuEntries(servers);
                    ServerData entry = new ServerData(
                            SERVER_NAME,
                            server.address(),
                            ServerData.Type.OTHER
                    );
                    servers.add(entry, false);

                    // Keep Limu visible at the top without creating duplicates.
                    int lastIndex = servers.size() - 1;
                    if (lastIndex > 0) {
                        servers.swap(lastIndex, 0);
                    }
                    servers.save();

                    if (minecraft.screen == screen) {
                        refreshVisibleList(screen, servers);
                    }
                }));
    }

    private static void removeLimuEntries(ServerList servers) {
        for (int i = servers.size() - 1; i >= 0; i--) {
            if (SERVER_NAME.equals(servers.get(i).name)) {
                servers.remove(servers.get(i));
            }
        }
    }

    private static void refreshVisibleList(JoinMultiplayerScreen screen, ServerList servers) {
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
            // Tolerate modest clock skew, but never keep a stale session address.
            if (ageSeconds < -600 || ageSeconds > 900) {
                return null;
            }

            return new ServerEndpoint(address);
        } catch (Exception ignored) {
            return null;
        }
    }

    private static String getString(JsonObject object, String name, String fallback) {
        try {
            return object.has(name) && !object.get(name).isJsonNull()
                    ? object.get(name).getAsString()
                    : fallback;
        } catch (Exception ignored) {
            return fallback;
        }
    }

    private static boolean getBoolean(JsonObject object, String name, boolean fallback) {
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
