package com.limupy.limuconnect.client;

import com.limupy.limuconnect.LimuConnectMod;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.components.Button;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.gui.screens.TitleScreen;
import net.minecraft.client.gui.screens.multiplayer.JoinMultiplayerScreen;
import net.minecraft.network.chat.Component;
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
    private ClientEvents() {}

    @SubscribeEvent
    public static void onScreenInit(ScreenEvent.Init.Post event) {
        Screen screen = event.getScreen();
        if (!(screen instanceof TitleScreen) && !(screen instanceof JoinMultiplayerScreen)) {
            return;
        }

        int x = screen instanceof TitleScreen ? 8 : Math.max(8, screen.width - 92);
        int y = 8;
        Button limuButton = Button.builder(
                Component.literal("Limu"),
                button -> Minecraft.getInstance().setScreen(new LimuConnectScreen(screen))
        ).bounds(x, y, 84, 20).build();

        event.addListener(limuButton);
    }
}
