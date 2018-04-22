const distance = require('./distance');
const markClusters = require('./markClusters');
const saveJson = require('../../utils/saveJson');
const indexBy = require('./indexBy');

function prepareRepresentation(macro) {
  return macro
    .lines
    .map(({ ambiguous, results }) => ambiguous ? results[0] : results) // eslint-disable-line no-confusing-arrow
    .reduce((lines, results) => {
      lines.push(...results);

      return lines;
    }, []);
}

module.exports = function findSimilar(macros) {
  const preparedMacros = macros
    .filter((macro) => macro.lines.every((line) => line.parsed))
    .map((macro) => ({
      ...macro,
      representation: prepareRepresentation(macro)
    }));

  const clustered = markClusters(preparedMacros, distance);
  const indexed = indexBy(clustered, 'clusterId');

  return saveJson(indexed, 'similar')
    .then(() => macros);
};
