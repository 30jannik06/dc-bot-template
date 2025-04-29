// 📁 src/events/interactionCreate.ts

import { Client } from "discord.js";
import { commands } from "../commands";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isChatInputCommand()) return;

        const { commandName } = interaction;
        const command = commands[commandName as keyof typeof commands];

        if (!command) {
            console.warn(`No command found for: ${commandName}`);
            return;
        }

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(`Error executing command ${commandName}, error`);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({
                    content: "There was an error executing that command.",
                    ephemeral: true,
                });
            } else {
                await interaction.reply({
                    content: `There was an error executing that command ${commandName}`,
                    ephemeral: true,
                });
            }
        }
    });
};
