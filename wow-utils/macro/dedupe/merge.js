const { uniq, compact } = require('lodash');

const INDEX_KEY = 'lines';

function setDict(dict, key, value) {
  if (!dict[key]) {
    dict[key] = value;
  }

  return dict[key];
}

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
      hash: macro[INDEX_KEY].join('\n')
    }))
    .forEach(({ hash, macro }) => {
      const item = setDict(seen, hash, {
        occurences: 0
      });

      props.forEach((prop) => setDict(item, prop, []).push(macro[prop]));
      item.occurences++;
    });

  const uniqueMacros = Object.values(seen);

  uniqueMacros.forEach((macro) => {
    props.forEach((prop) => {
      macro[prop] = compact(uniq(macro[prop])).sort((prop1, prop2) => prop1.localeCompare(prop2));
    });
  });

  return uniqueMacros;
};
