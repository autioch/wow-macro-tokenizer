const parseMacro = require('./parseMacro');
const { saveJson } = require('../../utils');

function parseFile(fileData) {
  const { macros, ...fileInfo } = fileData;

  return macros.map((lines) => ({
    ...fileInfo,
    ...parseMacro(lines)
  }));
}

module.exports = function parser(readerOutput) {
  const parsedMacros = readerOutput.reduce((macros, file) => macros.concat(parseFile(file)), []);

  return saveJson(parsedMacros, 'parser').then(() => parsedMacros);
};
