import dotenv from 'dotenv-flow';
import { z } from 'zod';
import { BotConfig } from '../interfaces/BotConfig';

dotenv.config();

// Zod-Schema ohne DEPLOY_COMMANDS
const envSchema = z.object({
  DISCORD_TOKEN: z.string().min(1, '❌ DISCORD_TOKEN fehlt oder ist leer.'),
  DISCORD_CLIENT_ID: z.string().min(1, '❌ DISCORD_CLIENT_ID fehlt oder ist leer.'),
  DISCORD_GUILD_ID: z.string().optional(),
  DEBUG_MODE: z.coerce.boolean().default(false),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('❌ Fehler in den Umgebungsvariablen:');
  console.error(parsedEnv.error.format());
  process.exit(1);
}

const env = parsedEnv.data;

// 🔥 DEPLOY_COMMANDS manuell parsen
const deployCommands =
  process.env.DEPLOY_COMMANDS === 'true' || process.env.DEPLOY_COMMANDS === '1';

export const config: BotConfig = {
  bot: {
    DISCORD_TOKEN: env.DISCORD_TOKEN,
    DISCORD_CLIENT_ID: env.DISCORD_CLIENT_ID,
    DISCORD_GUILD_ID: env.DISCORD_GUILD_ID,
  },
  env: {
    DEBUG_MODE: env.DEBUG_MODE,
    NODE_ENV: env.NODE_ENV,
    DEPLOY_COMMANDS: deployCommands,
  },
};
