function setArrayHash(addons, parsedFile) {
  if (!addons[parsedFile.fileName]) {
    addons[parsedFile.fileName] = {};
  }

  if (!addons[parsedFile.fileName][parsedFile.hash]) {
    addons[parsedFile.fileName][parsedFile.hash] = {
      fileSize: parsedFile.fileSize,
      files: []
    };
  }

  return addons[parsedFile.fileName][parsedFile.hash];
}

module.exports = function mergeConfig(parsedFiles) {
  return parsedFiles.reduce((addons, parsedFile) => {
    const arrayHash = setArrayHash(addons, parsedFile);

    arrayHash.files.push(parsedFile.filePath);
    arrayHash.files.sort();

    return addons;
  }, {});
};
