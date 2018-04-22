const parseLine = require('./parseLine');
const saveJson = require('../../utils/saveJson');

function tokenizeMacro(macro) {
  return {
    ...macro,
    lines: macro.lines.map((line) => parseLine(line))
  };
}

module.exports = function tokenize(macros) {
  const tokenized = macros.map((macro) => tokenizeMacro(macro));

  return saveJson(tokenized, 'tokenized').then(() => tokenized);
};
