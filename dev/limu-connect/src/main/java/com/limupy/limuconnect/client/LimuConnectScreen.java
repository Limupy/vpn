package com.limupy.limuconnect.client;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.time.Instant;
import java.util.regex.Pattern;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.Button;
import net.minecraft.client.gui.screens.ConnectScreen;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.multiplayer.ServerData;
import net.minecraft.client.multiplayer.resolver.ServerAddress;
import net.minecraft.network.chat.Component;

public final class LimuConnectScreen extends Screen {
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

    private final Screen parent;
    private String statusText = "Проверяю сервер Limu…";
    private String detailText = "Получаю актуальный адрес подключения";
    private String serverAddress;
    private String updatedText = "—";
    private int playersOnline;
    private int playersMax = 20;
    private boolean loading;
    private Button connectButton;

    public LimuConnectScreen(Screen parent) {
        super(Component.literal("Limu Connect"));
        this.parent = parent;
    }

    @Override
    protected void init() {
        int center = this.width / 2;
        int buttonY = this.height / 2 + 65;

        this.connectButton = this.addRenderableWidget(Button.builder(
                Component.literal("Подключиться"),
                button -> connect()
        ).bounds(center - 100, buttonY, 200, 24).build());
        this.connectButton.active = false;

        this.addRenderableWidget(Button.builder(
                Component.literal("Обновить"),
                button -> refreshStatus()
        ).bounds(center - 100, buttonY + 32, 96, 20).build());

        this.addRenderableWidget(Button.builder(
                Component.literal("Назад"),
                button -> onClose()
        ).bounds(center + 4, buttonY + 32, 96, 20).build());

        refreshStatus();
    }

    private void refreshStatus() {
        if (loading) {
            return;
        }
        loading = true;
        statusText = "Проверяю сервер Limu…";
        detailText = "Подключаюсь к каталогу Limu";
        if (connectButton != null) {
            connectButton.active = false;
        }

        HttpRequest request = HttpRequest.newBuilder(STATUS_URI)
                .timeout(Duration.ofSeconds(8))
                .header("Accept", "application/json")
                .header("Cache-Control", "no-cache")
                .header("User-Agent", "LimuConnect/1.0.0 Minecraft/1.21.1")
                .GET()
                .build();

        HTTP.sendAsync(request, HttpResponse.BodyHandlers.ofString())
                .thenApply(response -> {
                    if (response.statusCode() != 200) {
                        throw new IllegalStateException("HTTP " + response.statusCode());
                    }
                    return parseStatus(response.body());
                })
                .whenComplete((result, error) -> Minecraft.getInstance().execute(() -> {
                    loading = false;
                    if (error != null) {
                        serverAddress = null;
                        statusText = "Не удалось получить статус";
                        detailText = "Проверьте подключение к Интернету и попробуйте ещё раз";
                        updatedText = "нет данных";
                    } else {
                        serverAddress = result.address;
                        statusText = result.online ? "Limu Minecraft доступен" : "Сервер сейчас офлайн";
                        detailText = result.online
                                ? "Steam P2P готов — можно подключаться"
                                : result.message;
                        playersOnline = result.playersOnline;
                        playersMax = result.playersMax;
                        updatedText = result.updatedAt;
                    }
                    if (connectButton != null) {
                        connectButton.active = serverAddress != null;
                    }
                }));
    }

    private static StatusResult parseStatus(String json) {
        JsonObject object = JsonParser.parseString(json).getAsJsonObject();
        String state = getString(object, "state", "offline");
        String address = getString(object, "address", "");
        String timestamp = getString(object, "updated_at", getString(object, "generated_at", ""));
        String message = getString(object, "message", getString(object, "reason", "Сервер временно недоступен"));

        boolean fresh = false;
        try {
            Instant updated = Instant.parse(timestamp);
            long ageSeconds = Duration.between(updated, Instant.now()).toSeconds();
            fresh = ageSeconds >= -60 && ageSeconds <= 900;
        } catch (Exception ignored) {
            // An invalid timestamp is treated as stale.
        }

        boolean validAddress = E4STEAM_ADDRESS.matcher(address).matches();
        boolean connected = ("online".equalsIgnoreCase(state) || "connected".equalsIgnoreCase(state))\n                && getBoolean(object, "connected", true)\n                && fresh && validAddress;

        int online = getInt(object, "players_online", 0);
        int max = getInt(object, "players_max", 20);

        return new StatusResult(
                connected ? address : null,
                connected,
                message,
                online,
                max,
                timestamp.isBlank() ? "нет данных" : timestamp
        );
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

    private static int getInt(JsonObject object, String name, int fallback) {
        try {
            return object.has(name) && !object.get(name).isJsonNull()
                    ? object.get(name).getAsInt()
                    : fallback;
        } catch (Exception ignored) {
            return fallback;
        }
    }

    private void connect() {
        if (serverAddress == null) {
            refreshStatus();
            return;
        }
        Minecraft minecraft = Minecraft.getInstance();
        ServerData data = new ServerData("Limu Minecraft", serverAddress, ServerData.Type.OTHER);
        ConnectScreen.startConnecting(
                this,
                minecraft,
                ServerAddress.parseString(serverAddress),
                data,
                false,
                null
        );
    }

    @Override
    public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) {
        renderBackground(graphics, mouseX, mouseY, partialTick);

        int center = this.width / 2;
        graphics.drawCenteredString(this.font, "Limu Connect", center, 54, 0xFFFFFF);
        graphics.drawCenteredString(this.font, "Limu Minecraft · NeoForge 1.21.1", center, 78, 0xB8C5D8);
        graphics.drawCenteredString(this.font, statusText, center, this.height / 2 - 45, 0xFFFFFF);
        graphics.drawCenteredString(
                this.font,
                detailText,
                center,
                this.height / 2 - 24,
                serverAddress == null ? 0xD0B070 : 0x72D39A
        );
        graphics.drawCenteredString(
                this.font,
                "Игроки: " + playersOnline + " / " + playersMax,
                center,
                this.height / 2 + 4,
                0xC8C8C8
        );
        graphics.drawCenteredString(
                this.font,
                "Обновлено: " + updatedText,
                center,
                this.height / 2 + 22,
                0x909090
        );

        super.render(graphics, mouseX, mouseY, partialTick);
    }

    @Override
    public void onClose() {
        Minecraft.getInstance().setScreen(parent);
    }

    @Override
    public boolean isPauseScreen() {
        return false;
    }

    private record StatusResult(
            String address,
            boolean online,
            String message,
            int playersOnline,
            int playersMax,
            String updatedAt
    ) {}
}
