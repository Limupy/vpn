# Limu Connect

Client-side NeoForge mod for Minecraft 1.21.1.

## What it does

- Adds a **Limu** button to the Minecraft title screen and Multiplayer screen.
- Downloads the current dedicated-server status from the Limu HTTPS endpoint.
- Connects to the current e4steam session address through the installed e4steam client.
- Does not open a direct TCP route, disable Steam authentication, or store Steam credentials.

## Requirements

- Minecraft 1.21.1
- NeoForge 21.1.262+
- e4steam 0.3.6+
- Steam running and signed in

## Build

Requires Java 21 and Gradle 9.2.1:

```sh
gradle build
```

The client JAR is written to `build/libs/`.

## Status document

The client reads:

`https://limupy.github.io/vpn/limu/connect.json`

Schema:

```json
{
  "schema": 1,
  "name": "Limu Minecraft",
  "state": "online",
  "address": "d-example.steam",
  "updated_at": "2026-11-12T14:00:00Z",
  "players_online": 0,
  "players_max": 20,
  "minecraft_version": "1.21.1",
  "build": "main",
  "message": "Steam P2P is ready"
}
```

The mod rejects missing, stale, or malformed addresses. The public document contains no Steam credentials or private keys.
