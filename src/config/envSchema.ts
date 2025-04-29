// src/config/envSchema.ts

import { z } from "zod";

export const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    DEBUG_MODE: z.coerce.boolean().default(false),
    DEPLOY_COMMANDS: z.coerce.boolean().default(false),
    DISCORD_TOKEN: z.string().min(1, "❌ DISCORD_TOKEN fehlt oder ist leer."),
    DISCORD_CLIENT_ID: z
        .string()
        .min(1, "❌ DISCORD_CLIENT_ID fehlt oder ist leer."),
    DISCORD_GUILD_ID: z.string().optional(),
});
