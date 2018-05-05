const { keyBy, uniq } = require('lodash');

const PROPS = [
  'label',
  'prefix',
  'icon'
];

module.exports = function dedupeMacros(existingMacros, newMacros) {
  const dict = keyBy(existingMacros, 'hash');
  let nextId = Math.max(0, ...existingMacros.filter((macro) => !!macro.id).map((macro) => macro.id)) + 1;

  newMacros.forEach((macro) => {
    const existingMacro = dict[macro.hash];

    if (existingMacro) {
      PROPS.forEach((prop) => {
        existingMacro[prop].push(...macro[prop]);
      });
    } else {
      dict[macro.hash] = macro;
      macro.id = nextId++;
    }
  });

  return Object.values(dict).map((macro) => {
    PROPS.forEach((prop) => {
      macro[prop] = uniq(macro[prop]).sort((a, b) => a.localeCompare(b));
    });

    return macro;
  });
};
