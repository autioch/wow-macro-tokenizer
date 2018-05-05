const Bluebird = require('bluebird');
const { readJson, saveJson, dedupeMacros } = require('utils');

const readMacros = require('./readMacros');
const tagMacros = require('./tagMacros');
const downloadMacroIcons = require('./downloadMacroIcons');
const tokenizeMacros = require('./tokenizeMacros');

module.exports = function getMacros(configDir) {
  return Bluebird
    .all([
      readJson('macros'),
      readMacros(configDir),
      readJson('tags')
    ])
    .then(([existingMacros, newMacros, tags]) => {
      const macros = dedupeMacros(existingMacros, newMacros);

      return tokenizeMacros(macros)
        .then((tokenized) => {
          const tagged = tagMacros(tokenized, tags);

          return Bluebird.all([
            saveJson(tagged, 'macros'),
            ...downloadMacroIcons(tagged)
          ]);
        });
    });
};
