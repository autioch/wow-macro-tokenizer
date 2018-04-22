const parseMacro = require('./parseMacro');
const { saveJson } = require('../../utils');

function parseFile({ filename, account, realm, character, macros }) {
  return macros.map((lines) => ({
    filename,
    account,
    realm,
    character,
    ...parseMacro(lines)
  }));
}

module.exports = function parser(readerOutput) {
  const parsedMacros = readerOutput.reduce((macros, file) => macros.concat(parseFile(file)), []);

  return saveJson(parsedMacros, 'parser').then(() => parsedMacros);
};
