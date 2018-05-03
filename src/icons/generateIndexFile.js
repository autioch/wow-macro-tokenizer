const { join, basename, extname } = require('path');
const { outputRoot } = require('../utils');
const fs = require('fs');

const EXTENSION = '.jpg';

module.exports = function generateIndexFile() {
  const icons = fs // eslint-disable-line no-sync
    .readdirSync(join(outputRoot, 'macroIcons'))
    .filter((fileName) => extname(fileName) === EXTENSION)
    .map((fileName) => basename(fileName, EXTENSION));

  const requireLines = icons.map((fileName) => `  ${fileName}: require('./${fileName}${EXTENSION}')`);

  return [
    'module.exports = {',
    requireLines.join(',\r\n'),
    '};',
    '' // empty line at the end
  ].join('\r\n');
};
