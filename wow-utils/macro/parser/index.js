const parseMacros = require('./parseMacros');
const { saveJson } = require('../../utils');

module.exports = function parser(readerOutput) {
  const parsedMacros = parseMacros(readerOutput);

  return saveJson(parsedMacros, 'parser').then(() => parsedMacros);
};
