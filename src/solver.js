const axios = require('axios').default;
const { attempt } = require('./solutions');

const { DISCORD_USERNAME } = process.env;

module.exports = {
  // eslint-disable-next-line consistent-return
  async solve(message) {
    if (this.needsToSolve(message)) {
      const answer = attempt(message);
      if (!answer) {
        return this.sendToServer('NO_ANSWER');
      }
      return this.sendToServer(`%verify ${answer}`);
    }
  },
  needsToSolve(message) {
    const contains = message.embeds[0].title.toLowerCase().includes('anti-bot')
    || message.content.toLowerCase().contains(DISCORD_USERNAME.toLowerCase());
    if (contains) {
      return true;
    }
    return false;
  },
  async sendToServer(key) {
    try {
      const res = await axios.put('http://localhost:7001', { key });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
};
