const { join } = require('path');
const outputRoot = require('./outputRoot');
const fs = require('fs');

module.exports = function readDir(dir) {
  return fs.readdirSync(join(outputRoot, dir)); // eslint-disable-line no-sync
};
