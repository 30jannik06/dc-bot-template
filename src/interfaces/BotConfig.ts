export interface BotConfig {
  bot: {
    DISCORD_TOKEN: string;
    DISCORD_CLIENT_ID: string;
    DISCORD_GUILD_ID?: string;
  };

  env: {
    DEBUG_MODE: boolean;
    NODE_ENV: 'development' | 'production';
    DEPLOY_COMMANDS: boolean;
  };
}
