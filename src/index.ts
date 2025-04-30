// 📁 src/index.ts

import { Client, GatewayIntentBits, Partials } from 'discord.js';
import { config } from './config/config';
import { BotClient } from './types/BotClient';

// ➡️ Client erstellen
export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Reaction, Partials.User],
}) as BotClient;

// ➡️ Event-Handler
import registerReady from './events/ready';
import registerInteractionCreate from './events/interactionCreate';

async function main() {
  try {
    // 🔗 Event-Handler registrieren
    registerReady(client);
    registerInteractionCreate(client);

    // 🚀 Bot starten
    await client.login(config.bot.DISCORD_TOKEN);
  } catch (error) {
    console.error('❌ Fehler beim Starten des Bots:', error);
    process.exit(1); // Falls etwas schiefgeht → Exit
  }
}

// ▶️ Starte den Bot
main();
