const { uniq } = require('lodash');

module.exports = function dedupe(parsedFiles) {
  const settingKeys = [];
  const settings = {};

  parsedFiles.forEach((parsedFile) => {
    parsedFile.settings.forEach(({ key, value }) => {
      settingKeys.push(key);
      if (settings[key]) {
        settings[key].push(value);
      } else {
        settings[key] = [value];
      }
    });
  });

  return uniq(settingKeys) // preserve order of appearance of the setting
    .map((key) => ({
      key,
      values: uniq(settings[key]).sort()
    }));
};
