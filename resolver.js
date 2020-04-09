const axios = require('axios').default;

const Resolver = function () {
  this.resolve = function (embeds, cb) {
    for (let i = 0; i < embeds.length; i++) {
      if (embeds[i].title.toLowerCase().includes('anti-bot')) {
        console.log('INFO: Challenge Found');
        const challenge = embeds[i].description.match('(?<=\\*\\*)(.*)(?=\\*\\*)')[0];
        console.log(`CHALLENGE: ${challenge}`);
        const answer = eval(challenge);
        console.log(`ANSWER: ${answer}`);
        console.log(`KEY: %verify ${answer}`);
        axios.put('http://localhost:7001', { key: `%verify ${answer}` })
          .then((res) => {
            cb(res); 
          })
          .catch((err) => {
            cb(undefined, err);
          });
      }
    }
  }
}
module.exports = new Resolver();