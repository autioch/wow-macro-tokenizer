const { downloadImage, generateIndexFile, readDir } = require('utils');
const { join, basename } = require('path');
const Bluebird = require('bluebird');
const { uniqBy } = require('lodash');
const { classNames, raceNames } = require('./iconIds');

function getIconsToDownload(icons, type) {
  const iconDict = readDir(`${type}Icons`)
    .map((fileName) => basename(fileName, '.jpg'))
    .reduce((obj, fileName) => {
      obj[fileName] = true;

      return obj;
    }, {});

  return uniqBy(icons, (icon) => icon.toLowerCase())
    .filter((icon) => !iconDict[icon])
    .sort((a, b) => a.localeCompare(b));
}

function dlIcons(icons, type) {
  const missingIcons = getIconsToDownload(icons, type);

  const iconPromises = missingIcons.map((icon) => {
    const imageUrl = `http://wow.zamimg.com/images/wow/icons/large/${type}_${icon}.jpg`;
    const imageFile = join(`${type}Icons`, `${icon}.jpg`);

    return downloadImage(imageUrl, imageFile);
  });

  return Bluebird
    .all(iconPromises)
    .then(() => generateIndexFile(`${type}Icons`));
}

module.exports = function downloadIcons() {
  return Bluebird
    .join(dlIcons(classNames, 'class'), dlIcons(raceNames, 'race'));
};
