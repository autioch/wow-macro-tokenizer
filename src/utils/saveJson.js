const saveFile = require('./saveFile');

module.exports = function saveJson(fileContents, fileName) {
  const serialized = JSON.stringify(fileContents, null, '  ');

  return saveFile(serialized, `${fileName}.json`);
};
