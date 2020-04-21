const axios = require('axios').default;

const Resolver = function () {
  this.resolve = function (embeds, cb) {
    for (let i = 0; i < embeds.length; i++) {
      if (embeds[i].title.toLowerCase().includes('anti-bot')) {
        console.log('INFO: Challenge Found');
        let challenge = embeds[i].description.match('(?<=\\*\\*)(.*)(?=\\*\\*)');
        if(challenge) {
          challenge = challenge[0];
          console.log(`CHALLENGE: ${challenge}`);
          const answer = eval(challenge);
          console.log(`ANSWER: ${answer}`);
          console.log(`KEY: %verify ${answer}`);
          const key = `%verify ${answer}`
          axios.put('http://localhost:7001', { key: key })
            .then((res) => {
              cb(res); 
            })
            .catch((err) => {
              cb(undefined, err);
            });
        } else {
          console.log(`CHALLENGE: N\A`);
          console.log(`DESCRIPTION: ${embeds[i].description}`);
          axios.put('http://localhost:7001', { key: '.' })
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
}
module.exports = new Resolver();