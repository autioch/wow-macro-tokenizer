const getIconsToDownload = require('./getIconsToDownload');
const { singleRun } = require('../../utils');
const downloadIcon = require('./downloadIcon');
const Bluebird = require('bluebird');
const qbLog = require('qb-log');

module.exports = function downloadIcons(macros) {
  const missingIcons = getIconsToDownload(macros);

  qbLog.info(missingIcons.length, 'icons to download.');

  const iconPromises = missingIcons.map((icon) => downloadIcon(icon));

  return Bluebird
    .all(iconPromises)
    .then(() => macros);
};

singleRun(module, 'tagger');
