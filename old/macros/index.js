const customMacros = require('./customMacros');
const readMacros = require('./readMacros');
const dedupeMacros = require('./dedupeMacros');
const downloadMacroIcons = require('./downloadMacroIcons');
const tagMacros = require('./tagMacros');
const tokenizeMacros = require('./tokenizeMacros');
const Bluebird = require('bluebird');
const { readJson } = require('utils');

module.exports = function getMacros(configDir) {
  return Bluebird
    .all([
      readMacros(configDir),
      customMacros(),
      readJson('tags')
    ])
    .then((macros1, macros2, tags) => {
      const macros = dedupeMacros(macros1.concat(macros2));
      const tagged = tagMacros(macros, tags);
      const tokenized = tokenizeMacros(tagged);

      return Bluebird.all(downloadMacroIcons(tokenized));
    });
};
