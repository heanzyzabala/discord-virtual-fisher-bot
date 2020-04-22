require('dotenv').config();

const Discord = require('discord.js');
const Solve = require('./solver');

const client = new Discord.Client();
const TOKEN = process.env.DISCORD_BOT_TOKEN;

client.on('ready', () => { console.log(`UP: ${client.readyAt}`); });

client.on('message', (message) => {
  if (message.member.id === client.user.id) {
    return;
  }

  if (message.member.id === '359340728968806400' || message.member.id === '574652751745777665') {
    Solve.solve(message);
  }
});
client.login(TOKEN);
