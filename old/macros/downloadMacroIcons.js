const { downloadImage, generateIndexFile } = require('utils');
const { join } = require('path');
const Bluebird = require('bluebird');
const { uniqBy } = require('lodash');
const { basename } = require('path');
const { readDir } = require('utils');

function getIconsToDownload(macros) {
  const iconDict = readDir(`macroIcons`)
    .map((fileName) => basename(fileName, '.jpg'))
    .reduce((obj, fileName) => {
      obj[fileName] = true;

      return obj;
    }, {});

  const allIcons = macros.reduce((arr, macro) => arr.concat(macro.icon), []);

  return uniqBy(allIcons, (icon) => icon.toLowerCase())
    .filter((icon) => !iconDict[icon])
    .sort((a, b) => a.localeCompare(b));
}

module.exports = function downloadIcons(macros) {
  const missingIcons = getIconsToDownload(macros);

  const iconPromises = missingIcons.map((icon) => {
    const imageUrl = `http://wow.zamimg.com/images/wow/icons/large/${icon.toLowerCase()}.jpg`;
    const imageFile = join('macroIcons', `${icon}.jpg`);

    return downloadImage(imageUrl, imageFile);
  });

  return Bluebird
    .all(iconPromises)
    .then(() => generateIndexFile('macroIcons'));
};
