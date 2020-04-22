const Addition = require('./addition');

const solutions = [Addition];

module.exports = {
  attempt(message) {
    for (let i = 0; i < solutions.length; i += 1) {
      const solution = solutions[i];
      const { answer } = solution.attempt(message);
      if (answer) {
        return { answer };
      }
    }
    return { answer: false };
  },
};
