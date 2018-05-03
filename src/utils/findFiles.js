const path = require('path');
const bluebird = require('bluebird');
const glob = bluebird.promisify(require('glob'));
const qbLog = require('qb-log');

qbLog({
  search: {
    prefix: 'SEARCH',
    formatter: qbLog._chalk.magenta // eslint-disable-line no-underscore-dangle
  }
});

module.exports = function findFiles(dir, fileName) {
  const absoluteRoot = path.resolve(dir);
  const searchExpression = path.join(absoluteRoot, '**', fileName);
  const posixSearchExpression = searchExpression.replace(/\\/g, '/');

  qbLog.search(posixSearchExpression, '...');

  return glob(posixSearchExpression)
    .tap((fileNames) => qbLog.search(fileNames.length, 'files'));
};
