const distance = require('./distance');
const markClusters = require('./markClusters');
const { saveJson, singleRun } = require('../../utils');
const indexBy = require('./indexBy');
const { flattenDeep } = require('lodash');

module.exports = function findSimilar(macros) {
  const preparedMacros = macros
    .map((macro) => ({
      ...macro,
      representation: flattenDeep(macro.lines)
    }))
    .filter(({ representation }) => representation.length > 0);

  const clustered = markClusters(preparedMacros, distance);
  const indexed = indexBy(clustered, 'clusterId');

  return saveJson(indexed, 'similar').then(() => macros);
};

singleRun(module, 'tokenized.parsed');
