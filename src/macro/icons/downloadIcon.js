const { join } = require('path');
const download = require('image-downloader');
const { outputRoot } = require('../../utils');
const qbLog = require('qb-log');

module.exports = function downloadIcon(iconId) {
  const url = `http://wow.zamimg.com/images/wow/icons/large/${iconId.toLowerCase()}.jpg`;

  qbLog.info('FETCH', url);

  return download.image({
    url,
    dest: join(outputRoot, 'macroIcons', `${iconId}.jpg`)
  })
    .catch((err) => qbLog.error(`FETCH ${iconId}:`, err.message));
};
