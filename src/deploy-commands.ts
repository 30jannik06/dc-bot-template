import { REST, Routes } from "discord.js";
import { config } from "./config/config";
import { commands } from "./commands";
import { DeployCommandsProps } from "./types/DeployCommandsProps";

const commandsData = Object.values(commands).map((command) => command.data);

const rest = new REST({ version: "10" }).setToken(config.bot.DISCORD_TOKEN);

export async function deployCommands({ guildId }: DeployCommandsProps) {
    try {
        console.log("Started refreshing application (/) commands.");

        // Wenn eine guildId angegeben ist -> nur in dieser Guild updaten
        if (guildId) {
            await rest.put(
                Routes.applicationGuildCommands(
                    config.bot.DISCORD_CLIENT_ID,
                    guildId
                ),
                { body: commandsData }
            );
            console.log(`✅ Befehle für Guild ${guildId} deployed.`);
        } else {
            // 🌍 Global deployen
            await rest.put(
                Routes.applicationCommands(config.bot.DISCORD_CLIENT_ID),
                { body: commandsData }
            );
            console.log("✅ Globale Befehle deployed.");
        }
    } catch (error) {
        console.error("❌ Fehler beim Deployen der Commands:", error);
    }
}
