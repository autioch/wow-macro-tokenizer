const tag = require('./tag');
const { saveJson } = require('../../utils');

module.exports = function tagger(macros) {
  const tagged = macros.map((macro) => tag(macro));

  return saveJson(tagged, 'tagger').then(() => tagged);
};
