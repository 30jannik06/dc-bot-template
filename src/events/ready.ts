// 📁 src/events/ready.ts

import { Client } from "discord.js";
import { deployCommands } from "../deploy-commands";
import { config } from "../config/config";
import { log } from "../utils/log";
import { showStartupMessage } from "../utils/startupMessage";

export default (client: Client): void => {
    client.once("ready", async () => {
        try {
            const tag = client.user?.tag ?? "Unbekannt";
            const id = client.user?.id ?? "???";
            const guilds = client.guilds.cache.size;

            // 🧹 Konsole clearen bevor irgendwas angezeigt wird
            console.clear();

            // 🌟 Stylisches Startup-Banner + Status-Infos
            showStartupMessage(client.user?.username || "Aftershock Bot", [
                "",
                `🤖 Bot User: ${tag} (${id})`,
                `🔗 Verbunden mit ${guilds} Server${guilds === 1 ? "" : "n"}`,
                `⚙️ Modus: ${config.env.NODE_ENV}`,
            ]);

            // 🔥 Debug-Modus Hinweis
            if (config.env.DEBUG_MODE) {
                log.debug(
                    "🛠️ Debug-Mode ist aktiv – zusätzliche Logs erlaubt."
                );
            }

            // 🚀 Slash-Commands Deployment
            if (config.env.DEPLOY_COMMANDS) {
                if (config.bot.DISCORD_GUILD_ID) {
                    await deployCommands({
                        guildId: config.bot.DISCORD_GUILD_ID,
                    });
                    log.success(
                        "✅ Slash-Commands (Guild) erfolgreich deployed."
                    );
                } else {
                    await deployCommands({}); // Globale Commands
                    log.success(
                        "✅ Slash-Commands (Global) erfolgreich deployed."
                    );
                }
            } else {
                log.debug(
                    "⚡ Slash-Commands Deployment wurde übersprungen (DEPLOY_COMMANDS=false)."
                );
            }
        } catch (error) {
            console.error("❌ Fehler beim Initialisieren:", error);
        }
    });
};
