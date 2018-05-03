const path = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const { outputRoot } = require('../utils');

module.exports = function writeConfig(config) {
  const lines = [];

  config.forEach((setting) => {
    const { key, values } = setting;

    if (values.length > 1) {
      lines.push('');
      lines.push(...values.map((value) => `SET ${key} "${value}"    ------------------------------------------`));
      lines.push('');
    } else {
      lines.push(`SET ${key} "${values[0]}"`);
    }
  });

  const fileName = path.join(outputRoot, 'Config.wtf');
  const serialized = lines.join('\n');

  return fs
    .writeFileAsync(fileName, serialized, 'utf-8')
    .then(() => config);
};
