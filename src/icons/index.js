const getIconsToDownload = require('./getIconsToDownload');
const { singleRun, saveFile } = require('../utils');
const downloadIcon = require('./downloadIcon');
const { join } = require('path');
const Bluebird = require('bluebird');
const qbLog = require('qb-log')('simple');
const generateIndexFile = require('./generateIndexFile');
const { classNames, raceNames } = require('./iconIds');

function dlIcons(icons, type) {
  const missingIcons = getIconsToDownload(icons, type);

  qbLog.info(missingIcons.length, 'icons to download.');

  const iconPromises = missingIcons.map((icon) => downloadIcon(icon, type));

  return Bluebird
    .all(iconPromises)
    .then(() => saveFile(generateIndexFile(), join(`${type}Icons`, 'index.js')));
}

module.exports = function downloadIcons() {
  return Bluebird
    .join(dlIcons(classNames, 'class'), dlIcons(raceNames, 'race'));
};

singleRun(module, 'categories');
