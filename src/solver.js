const axios = require('axios').default;
const { attempt } = require('./solutions');

const { DISCORD_USERNAME } = process.env;
const PORT = process.env.SERVER_PORT;

module.exports = {
  // eslint-disable-next-line consistent-return
  solve(message) {
    if (this.needsToSolve(message)) {
      const { answer } = attempt(message);
      if (answer === false) {
        this.sendToServer('NO_ANSWER');
      } else {
        this.sendToServer(`%verify ${answer}`);
      }
    }
  },
  needsToSolve(message) {
    if (message.embeds.length > 0 && message.embeds[0].title.toLowerCase().includes('anti-bot')) {
      return true;
    }
    if (message.content.toLowerCase().includes(DISCORD_USERNAME.toLowerCase())) {
      return true;
    }
    return false;
  },
  async sendToServer(key) {
    try {
      const res = await axios.put(`http://localhost:${PORT}`, { key });
      console.log(res.status);
    } catch (error) {
      console.log(error);
    }
  },
};
