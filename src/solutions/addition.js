module.exports = {
  attempt(message) {
    if (message.embeds.length > 0) {
      const pattern = '(?<=\\*\\*)(.*)(?=\\*\\*)';
      const challenge = message.embeds[0].description.match(pattern);
      if (challenge) {
        // eslint-disable-next-line no-eval
        return { answer: eval(challenge) };
      }
    }
    return { answer: false };
  },
};
