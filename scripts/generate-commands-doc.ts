// Beispiel scripts/generate-commands-doc.ts
import { glob } from 'glob';
import { promises as fs } from 'fs';
import path from 'path';
import { SlashCommandBuilder } from 'discord.js';

async function generateDocs() {
  const files = await glob('src/commands/**/*.ts');
  const lines = ['# 📘 Slash Commands', ''];

  for (const file of files) {
    try {
      const fileUrl = new URL(`file://${path.resolve(file).replace(/\\/g, '/')}`);
      const mod = await import(fileUrl.href);
      const data: SlashCommandBuilder = mod.data;
      if (data) {
        lines.push(`### \`/${data.name}\``);
        lines.push(data.description);
        lines.push('');
      }
    } catch (err) {
      console.warn(`⚠️ Fehler beim Laden von ${file}`, err);
    }
  }

  await fs.writeFile('COMMANDS.md', lines.join('\n'));
  console.log('✅ COMMANDS.md generiert');
}

generateDocs();
