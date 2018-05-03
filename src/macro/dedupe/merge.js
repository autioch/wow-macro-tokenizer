const { uniq, compact } = require('lodash');
const { setDict } = require('../../utils');

const INDEX_KEY = 'lines';

function getProps(macros) {
  const allKeys = macros.reduce((arr, macro) => arr.concat(Object.keys(macro)), []);

  return uniq(allKeys).filter((item) => item !== INDEX_KEY);
}

module.exports = function dedupe(macros) {
  const props = getProps(macros);
  const seen = {};

  macros
    .map((macro) => ({
      macro,
      hash: macro[INDEX_KEY].map((line) => line.trim()).join('\n')
    }))
    .forEach(({ hash, macro }) => {
      const item = setDict(seen, hash, {
        [INDEX_KEY]: macro[INDEX_KEY],
        occurences: 0
      });

      props.forEach((prop) => setDict(item, prop, []).push(macro[prop]));
      item.occurences++;
    });

  const uniqueMacros = Object.values(seen);

  uniqueMacros.forEach((macro) => {
    props.forEach((prop) => {
      macro[prop] = compact(uniq(macro[prop])).sort();
    });
  });

  return uniqueMacros;
};
