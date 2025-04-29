import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Zeigt die aktuelle Bot-Latenz.");

export async function execute(interaction: CommandInteraction) {
    const sent = await interaction.reply({
        content: "🏓 Pinge...",
        fetchReply: true,
    });
    const latency = sent.createdTimestamp - interaction.createdTimestamp;

    return interaction.editReply(
        `🏓 Pong! Latenz: \`${latency}ms\`, API: \`${Math.round(interaction.client.ws.ping)}ms\``
    );
}
