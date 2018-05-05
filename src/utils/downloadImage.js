const { join } = require('path');
const download = require('image-downloader');
const outputRoot = require('./outputRoot');
const qbLog = require('qb-log');

module.exports = function downloadImage(imageUrl, imageFile) {
  qbLog.info('FETCH', imageUrl);

  return download
    .image({
      url: imageUrl,
      dest: join(outputRoot, imageFile)
    })
    .then(() => qbLog.info('FETCH DONE', imageUrl))
    .catch((err) => qbLog.error(`FETCH FAIL ${imageUrl} ${err.message}`));
};
