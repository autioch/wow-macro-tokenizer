const { uniqBy } = require('lodash');
const { join, basename } = require('path');
const { outputRoot } = require('../../utils');
const ignore = require('./ignore');
const fs = require('fs');

module.exports = function getIconsToDownload(macros) {
  const iconDict = fs // eslint-disable-line no-sync
    .readdirSync(join(outputRoot, 'macroIcons'))
    .map((fileName) => basename(fileName, '.jpg'))
    .reduce((obj, fileName) => {
      obj[fileName] = true;

      return obj;
    }, {});

  const allIcons = macros
    .map((macro) => macro.icon)
    .reduce((arr, icon) => arr.concat(icon), []);

  const missingIcons = uniqBy(allIcons, (icon) => icon.toLowerCase())
    .filter((icon) => !iconDict[icon])
    .filter((icon) => !ignore[icon])
    .sort((a, b) => a.localeCompare(b));

  return missingIcons;
};
