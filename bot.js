require('dotenv').config();

const Discord = require('discord.js');
const Resolver = require('./resolver');
const bot = new Discord.Client();
const token = process.env.DISCORD_BOT_VFABHANDLER_TOKEN;

bot.on('ready', () => {
  console.log(`UP: ${bot.readyAt}`);
});

bot.on('message', msg => {
  if (msg.member.id == bot.user.id) {
    return;
  }
  const embeds = msg.embeds;
  if(embeds.length > 0) {
    Resolver.resolve(embeds, (res, err) => {
      if(err) {
        console.log(err);
      }
      else {
        console.log('STATUS: Success');
      }
    });
  }
});
bot.login(token);




