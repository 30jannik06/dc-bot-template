// 📁 src/types/GuildConfig.ts

export type GuildConfig = {
  [guildId: string]: {
    [key: string]: string;
  };
};
