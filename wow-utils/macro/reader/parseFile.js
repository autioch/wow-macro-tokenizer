const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));

const GLOB_PATH_SEP = '/';
const MAIN_FOLDER = 'Account';
const MACRO_END = 'END';

function parseFilename(filename) {
  const pathParts = filename.split(GLOB_PATH_SEP);

  while (pathParts[0] && pathParts[0] !== MAIN_FOLDER) {
    pathParts.shift();
  }

  pathParts.shift(); // remove 'Account';
  pathParts.pop(); // remove 'macros-cache.txt';

  /* If file is accunt wide, realm and character will be empty. */
  const [account, realm, character] = pathParts;

  return {
    filename,
    account,
    realm,
    character
  };
}

function parseMacros(fileContents) {
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
  return fs
    .readFileAsync(filename, 'utf8')
    .then((fileContents) => {
      const fileDetails = parseFilename(filename);

      fileDetails.macros = parseMacros(fileContents);

      return fileDetails;
    });
};
