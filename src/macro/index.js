const reader = require('./reader');
const parser = require('./parser');
const dedupe = require('./dedupe');
const tokenize = require('./tokenize');

// const tagger = require('./tagger');

module.exports = function getMacros(dir) {
  return reader(dir)
    .then(parser)
    .then(dedupe)
    .then(tokenize);

  // .then(tagger);
};
