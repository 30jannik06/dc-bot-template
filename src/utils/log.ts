// src/utils/log.ts
import chalk from "chalk";
import { config } from "../config/config";

const timestamp = () => chalk.gray(`[${new Date().toLocaleTimeString()}]`);

export const log = {
    info: (message: string) =>
        console.log(`${timestamp()} ${chalk.blue("ℹ️ [INFO]")} ${message}`),

    success: (message: string) =>
        console.log(`${timestamp()} ${chalk.green("✅ [OK]")} ${message}`),

    warn: (message: string) =>
        console.warn(`${timestamp()} ${chalk.yellow("⚠️ [WARN]")} ${message}`),

    error: (message: string, error?: any) => {
        console.error(`${timestamp()} ${chalk.red("❌ [ERROR]")} ${message}`);
        if (error) console.error(error);
    },

    debug: (message: string) => {
        if (config.env.DEBUG_MODE) {
            console.log(
                `${timestamp()} ${chalk.magenta("🛠️ [DEBUG]")} ${message}`
            );
        }
    },

    banner: (lines: string[]) => {
        console.log(
            chalk.blueBright("═══════════════════════════════════════════")
        );
        lines.forEach((line) => console.log(chalk.cyan(line)));
        console.log(
            chalk.blueBright("═══════════════════════════════════════════")
        );
    },
};
