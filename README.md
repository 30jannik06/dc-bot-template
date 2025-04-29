# ⚡ bot-template

![Build](https://img.shields.io/github/actions/workflow/status/30jannik06/bot-template/ci.yml?branch=main)
![License](https://img.shields.io/github/license/30jannik06/bot-template)

Ein modernes, schnelles und wartbares Discord-Bot-Template mit TypeScript und Discord.js.  
Ideal für Slash Commands, Events, Umgebungssteuerung und Logging – ready für dein nächstes Projekt!

---

## 🚀 Features

- ✅ **TypeScript + ESM/CJS Build mit tsup**
- 🧹 **Slash-Commands (lokal oder global)**
- ⚙️ **Dynamisches Command- & Event-Handling**
- 🌱 **dotenv-flow für Umgebungsvariablen** (.env.development, .env.production)
- 🧪 **Dev-Server mit tsx + Watch-Modus**
- 🧺 **Prettier + ESLint** integriert
- 📦 Saubere Struktur & sofort einsatzbereit

---

## 💠 Setup

```bash
# Projekt klonen
git clone https://github.com/30jannik06/bot-template.git
cd bot-template

# Abhängigkeiten installieren
npm install
```

---

## ⚙️ Konfiguration (.env)

Nutze `.env.development`, `.env.production` oder `.env.example`:

```env
DISCORD_CLIENT_ID=deine_client_id
DISCORD_TOKEN=dein_bot_token
DISCORD_GUILD_ID=optionale_guild_id_für_test_deploy

DEBUG_MODE=true
DEPLOY_COMMANDS=true
NODE_ENV=development
```

> 🔒 Die Datei `.env` ist **nicht** versioniert (.gitignore), lege sie lokal an.

---

## ▶️ Scripts

| Befehl             | Beschreibung                                      |
|--------------------|---------------------------------------------------|
| `npm run dev`      | Startet den Bot im Entwicklungsmodus (watch)     |
| `npm run build`    | Erstellt den Build (dist/, ESM & CJS, minified)  |
| `npm start`        | Startet den Bot im Produktionsmodus (dist)       |
| `npm run format`   | Formatiert Code mit Prettier                     |
| `npm run lint`     | Führt ESLint mit Autokorrektur aus              |

---

## 📁 Struktur

```bash
src/
├── commands/              # Slash Commands, z. B. /ping
├── events/                # Event Listener (ready, interactionCreate, etc.)
├── utils/                 # Logsystem, Startup-Banner etc.
├── types/                 # Eigene TypeScript-Typen
├── config.ts              # Umgebungs-Konfiguration
├── deploy-commands.ts     # Slash Commands registrieren
├── index.ts               # Bot-Einstiegspunkt
```

---

## 💡 Beispielcommand

```ts
// src/commands/user/ping.ts

import { SlashCommandBuilder } from "discord.js";

export const command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Antwortet mit Pong!"),

  async execute(interaction) {
    await interaction.reply("🏓 Pong!");
  },
};
```

---

## 📦 Build-Details

- Transpiliert mit `tsup`
- Dual-Output: CommonJS + ESM
- Produktionsbereit (minify, clean)

---

## 📝 Lizenz

ISC License – von [.jannik](https://github.com/30jannik06)  
Feel free to fork, erweitern oder für dein Projekt nutzen!

