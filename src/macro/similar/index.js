const distance = require('./distance');
const markClusters = require('./markClusters');
const { saveJson, readJson } = require('../../utils');
const indexBy = require('./indexBy');
const Bluebird = require('bluebird');
const qbLog = require('qb-log');

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
    }))
    .filter(({ representation }) => representation.length > 0);

  qbLog.info(preparedMacros.length, '/', macros.length, 'macros available for parsing');

  const clustered = markClusters(preparedMacros, distance);
  const indexed = indexBy(clustered, 'clusterId');

  return saveJson(indexed, 'similar')
    .then(() => macros);
};

if (require.main === module) {
  /* When debugging in chrome, we need to delay execution to have time for chrome to react and us to place a breakpoint ;) */
  const CHROME_DEBUG_DELAY = 0;

  Bluebird
    .delay(CHROME_DEBUG_DELAY)
    .then(() => readJson('tokenized').then((tokenized) => module.exports(tokenized)));
}
