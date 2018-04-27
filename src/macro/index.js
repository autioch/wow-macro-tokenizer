const dedupe = require('./dedupe');
const parser = require('./parser');
const reader = require('./reader');
const tokenize = require('./tokenize');
const similar = require('./similar');
const tagger = require('./tagger');

module.exports = function getMacros(dir) {
  return reader(dir)
    .then(parser)
    .then(dedupe)
    .then(tokenize)
    .then(tagger)
    .then(similar);
};
