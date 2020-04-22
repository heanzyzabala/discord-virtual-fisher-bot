require('dotenv').config();

const Discord = require('discord.js');
const { solve } = require('./solver');

const client = new Discord.Client();
const token = process.env.DISCORD_BOT_VFABHANDLER_TOKEN;

client.on('ready', () => { console.log(`UP: ${client.readyAt}`); });

client.on('message', (message) => {
  if (message.member.id === client.user.id) {
    return;
  }

  if (message.member.id === '574652751745777665') {
    console.log(message.embeds);
    // solve(message);
  }
});
client.login(token);
  // if(msg.member.id === '574652751745777665' && (msg.content.includes('Twainstar') || msg.content.includes('Twain') || msg.content.includes('Twainstar#6300'))) {
  //   console.log(`UNSUPPORTED CHALLENGE: ${Date(Date.now())}`);
  //   console.log(`CHALLENGE: ${msg.content}`);
  //   axios.put('http://localhost:7001', { key: '.' })
  //   .then((res) => {
  //     console.log('OK');
  //   })
  //   .catch((err) => {
  //     console.log(res);
  //   });
  // } else {
  //   const embeds = msg.embeds;
    // const embeds = [
    //   {
    //     type: 'rich',
    //     title: 'Anti-bot\n%verify <result>',
    //     description: 'Please enter the answering to the following problem: **20 + 18**.',
    //     url: undefined,
    //     color: 65535,
    //     timestamp: null,
    //     fields: [],
    //     thumbnail: null,
    //     image: null,
    //     video: null,
    //     author: {
    //       name: 'ob',
    //       url: undefined,
    //       iconURL: undefined,
    //       proxyIconURL: undefined
    //     },
    //     provider: null,
    //     footer: null,
    //     files: []
    //   }
    // ]