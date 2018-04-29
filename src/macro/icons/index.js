const getIconsToDownload = require('./getIconsToDownload');
const { singleRun, saveFile } = require('../../utils');
const downloadIcon = require('./downloadIcon');
const { join } = require('path');
const Bluebird = require('bluebird');
const qbLog = require('qb-log');
const generateIndexFile = require('./generateIndexFile');

module.exports = function downloadIcons(macros) {
  const missingIcons = getIconsToDownload(macros);

  qbLog.info(missingIcons.length, 'icons to download.');

  const iconPromises = missingIcons.map((icon) => downloadIcon(icon));

  return Bluebird
    .all(iconPromises)
    .then(() => saveFile(generateIndexFile(), join('macroIcons', 'index.js')))
    .then(() => macros);
};

singleRun(module, 'tagger');
