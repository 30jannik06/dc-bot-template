import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';

export function showStartupMessage(botName: string, extraLines: string[] = []) {
  console.clear(); // Konsole leeren

  // 🎯 1. Banner erstellen
  const banner = figlet.textSync(botName, {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  });

  // 🎯 2. Status-Infos vorbereiten
  const lines = [
    chalk.greenBright('Bot erfolgreich gestartet! 🚀'),
    '',
    `${chalk.white('Status:')} ${chalk.green('Online')}`,
    `${chalk.white('Environment:')} ${chalk.yellowBright(process.env.NODE_ENV || 'development')}`,
    ...extraLines,
  ];

  // 🎯 3. Große Gesamtbox bauen
  const fullOutput = boxen(`${chalk.cyanBright(banner)}\n\n${lines.join('\n')}`, {
    padding: 1,
    margin: 1,
    borderColor: 'blue',
    borderStyle: 'double',
    title: botName,
    titleAlignment: 'center',
  });

  console.log(fullOutput);
}
