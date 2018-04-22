const path = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));

const OUTPUT_FOLDER = path.join(__dirname, '..', '..', 'output');

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

  const serialized = lines.join('\n');

  return fs
    .writeFileAsync(path.join(OUTPUT_FOLDER, 'Config.wtf'), serialized, 'utf-8')
    .then(() => config);
};
