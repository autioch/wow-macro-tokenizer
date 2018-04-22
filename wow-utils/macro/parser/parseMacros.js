const parseMacro = require('./parseMacro');

module.exports = function parseMacros(readerOutput) {
  return readerOutput.reduce((macros, { filename, account, realm, character, macros: fileMacros }) => {
    const preparedMacros = fileMacros.map((lines) => Object.assign(parseMacro(lines), {
      filename,
      account,
      realm,
      character
    }));

    return macros.concat(preparedMacros);
  }, []);
};
