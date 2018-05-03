const { findFiles, readFile, saveJson, setDict } = require('utils');
const { relative, basename } = require('path');
const { createHash } = require('crypto');

function setHashEntry(addons, { fileName, hash, fileSize }) {
  setDict(addons, fileName, {});
  setDict(addons[fileName], hash, {
    fileSize,
    files: []
  });

  return addons[fileName][hash].files;
}

function parseFile({ fileContents, fileName }, dir) {
  return {
    hash: createHash('md5').update(fileContents).digest('hex'),
    filePath: relative(dir, fileName),
    fileSize: fileContents.length,
    fileName: basename(fileName, '.lua')
  };
}

function groupByHash(parsedFiles) {
  return parsedFiles.reduce((addons, parsedFile) => {
    const filesArray = setHashEntry(addons, parsedFile);

    filesArray.push(parsedFile.filePath);
    filesArray.sort();

    return addons;
  }, {});
}

module.exports = function getAddons(dir) {
  return findFiles(dir, '*.lua')
    .map((fileName) => readFile(fileName))
    .map((fileInfo) => parseFile(fileInfo, dir))
    .then((parsedFiles) => groupByHash(parsedFiles))
    .then((addons) => saveJson(addons, 'addons'));
};
