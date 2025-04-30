// types/BotClient.ts
import { Client } from 'discord.js';
import { Command } from './Command';

export interface BotClient extends Client {
  commands: Map<string, Command>;
}
