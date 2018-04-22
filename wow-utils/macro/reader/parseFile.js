const { readFile } = require('../utils');

const GLOB_PATH_SEP = '/';
const MAIN_FOLDER = 'Account';
const MACRO_END = 'END';

function parseFilename(filename) {
  const pathParts = filename.split(GLOB_PATH_SEP);
  const accountIndex = pathParts.indexOf(MAIN_FOLDER);
  const [account, realm, character] = pathParts.slice(accountIndex + 1, -1);

  return {
    filename,
    account,
    realm,
    character
  };
}

function extractMacros(fileContents) {
  const macros = [];
  let currentMacroLines = [];

  fileContents
    .split('\n')
    .map((line) => line.trim())
    .forEach((line) => {
      currentMacroLines.push(line);
      if (line === MACRO_END) {
        macros.push(currentMacroLines);
        currentMacroLines = [];
      }
    });

  return macros;
}

module.exports = function parseFile(filename) {
  return readFile(filename).then(({ fileContents }) => ({
    ...parseFilename(filename),
    macros: extractMacros(fileContents)
  }));
};
