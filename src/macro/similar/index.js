const distance = require('./distance');
const markClusters = require('./markClusters');
const saveJson = require('../../utils/saveJson');
const indexBy = require('./indexBy');
const toLines = require('./toLines');

module.exports = function findSimilar(minifiedMacros) {
  const clustered = markClusters(minifiedMacros, distance);
  const indexed = indexBy(clustered, 'clusterId');

  return saveJson(indexed, 'similar')
    .then(() => saveJson(toLines(minifiedMacros), 'lines'))
    .then(() => minifiedMacros);
};

if (require.main === module) {
  module.exports(require('../../../output/minified.json'));
}
