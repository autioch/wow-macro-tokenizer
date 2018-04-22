const dedupe = require('./dedupe');
const parser = require('./parser');
const reader = require('./reader');
const tagger = require('./tagger');

module.exports = function getMacros(dir) {
  return reader(dir)
    .then(parser)
    .then(dedupe)
    .then(tagger);
};
