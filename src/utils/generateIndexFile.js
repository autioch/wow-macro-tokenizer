const { join, basename } = require('path');
const saveFile = require('./saveFile');
const readDir = require('./readDir');

module.exports = function generateIndexFile(dir) {
  const requireLines = readDir(dir)
    .map((fileName) => basename(fileName))
    .filter((baseName) => baseName !== 'index.js')
    .map((fileName) => `  ${fileName.slice(0, fileName.indexOf('.'))}: require('./${fileName}')`);

  const lines = [
    'module.exports = {',
    requireLines.join(',\r\n'),
    '};',
    '' // empty line at the end
  ].join('\r\n');

  return saveFile(lines, join(dir, 'index.js'));
};
