// 📁 src/commands/index.ts

// 📁 user commands
import * as ping from './user/ping';

// 🔁 Export all as single object
export const commands = {
  //user commands
  ping,
};
