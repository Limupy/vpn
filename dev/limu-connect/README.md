# Limu Connect

Client-side NeoForge mod for Minecraft 1.21.1.

## What it does

- Adds **Limu Minecraft** directly to the normal Multiplayer server list.
- Uses the vanilla server row, ping display, selection, and Connect action.
- On opening Multiplayer, refreshes the e4steam session address from the Limu HTTPS directory.
- Removes a stale Limu row before refresh; if the directory is unavailable or the entry is stale, it is not left as a dead server.
- Stores the current row in the ordinary Minecraft `servers.dat` list, with no separate Limu button or custom screen.
- Does not open a direct TCP route, disable Steam authentication, or store Steam credentials.

## Requirements

- Minecraft 1.21.1
- NeoForge 21.1+
- e4steam 0.3.2+
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

It accepts a fresh, connected e4steam session with an address ending in `.steam`. Old or malformed addresses are rejected.
