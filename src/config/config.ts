import dotenv from 'dotenv-flow';
import { envSchema } from './envSchema';

dotenv.config(); // Lädt automatisch .env-abhängig von NODE_ENV

// ➡️ Validierung der Umgebungsvariablen
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('❌ Fehler in den Umgebungsvariablen:');
  console.error(parsedEnv.error.format());
  process.exit(1);
}

const env = parsedEnv.data;

// ➡️ Exportiere strukturierte Configs
export const config = {
  bot: {
    DISCORD_TOKEN: env.DISCORD_TOKEN,
    DISCORD_CLIENT_ID: env.DISCORD_CLIENT_ID,
    DISCORD_GUILD_ID: env.DISCORD_GUILD_ID,
  },

  env: {
    DEBUG_MODE: env.DEBUG_MODE,
    NODE_ENV: env.NODE_ENV,
    DEPLOY_COMMANDS: env.DEPLOY_COMMANDS,
  },
};
