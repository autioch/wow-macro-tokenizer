const app = require('./app');
const custom = require('./custom');
const dedupe = require('./dedupe');
const icons = require('./icons');
const parser = require('./parser');
const reader = require('./reader');
const tagger = require('./tagger');
const tokenize = require('./tokenize');

module.exports = function getMacros(dir) {
  return Promise.resolve()
    .then(() => reader(dir))
    .then(parser)
    .then(custom)
    .then(dedupe)
    .then(tokenize)
    .then(tagger)
    .then(icons)
    .then(app); // app only copies jsons. Build must be done manually.
};
