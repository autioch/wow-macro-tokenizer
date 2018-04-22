const path = require('path');
const bluebird = require('bluebird');
const glob = bluebird.promisify(require('glob'));
const qbLog = require('qb-log')('simple');

module.exports = function findFiles(dir, fileName) {
  const absoluteRoot = path.resolve(dir);
  const searchExpression = path.join(absoluteRoot, '**', fileName);
  const posixSearchExpression = searchExpression.replace(/\\/g, '/');

  qbLog.info('Find files', posixSearchExpression, '...');

  return glob(posixSearchExpression)
    .tap((fileNames) => qbLog.info('Found', fileNames.length, 'files'));
};
