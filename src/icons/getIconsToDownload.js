const { uniqBy } = require('lodash');
const { join, basename } = require('path');
const { outputRoot } = require('../utils');
const fs = require('fs');

module.exports = function getIconsToDownload(icons, type) {
  const iconDict = fs // eslint-disable-line no-sync
    .readdirSync(join(outputRoot, `${type}Icons`))
    .map((fileName) => basename(fileName, '.jpg'))
    .reduce((obj, fileName) => {
      obj[fileName] = true;

      return obj;
    }, {});

  const missingIcons = uniqBy(icons, (icon) => icon.toLowerCase())
    .filter((icon) => !iconDict[icon])
    .sort((a, b) => a.localeCompare(b));

  return missingIcons;
};
