const dedupe = require('./dedupe');
const parser = require('./parser');
const reader = require('./reader');
const tokenize = require('./tokenize');
const app = require('./app');
const tagger = require('./tagger');

module.exports = function getMacros(dir) {
  return reader(dir)
    .then(parser)
    .then(dedupe)
    .then(tokenize)
    .then(tagger)
    .then(app); // app only copies jsons. Build must be done manually.
};
