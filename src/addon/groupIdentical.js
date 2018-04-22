function setDict(dict, key, value) {
  if (!dict[key]) {
    dict[key] = value;
  }

  return dict;
}

function setHashEntry(addons, { fileName, hash, fileSize }) {
  setDict(addons, fileName, {});
  setDict(addons[fileName], hash, {
    fileSize,
    files: []
  });

  return addons[fileName][hash].files;
}

module.exports = function mergeConfig(parsedFiles) {
  return parsedFiles.reduce((addons, parsedFile) => {
    const filesArray = setHashEntry(addons, parsedFile);

    filesArray.push(parsedFile.filePath);
    filesArray.sort();

    return addons;
  }, {});
};