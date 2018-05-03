const Bluebird = require('bluebird');
const qbLog = require('qb-log')('simple');

qbLog({
  count: {
    prefix: 'COUNT',
    formatter: qbLog._chalk.green // eslint-disable-line no-underscore-dangle
  }
});

const steps = [
  'reader',
  'parser',
  'custom',
  'dedupe',
  'tokenize',
  'tagger',
  'icons',
  'app'
].map((stepName) => ({
  stepName,
  fn: require(`./${stepName}`)
}));

module.exports = function getMacros(dir) {
  const startingPromise = Bluebird.resolve(dir);

  return steps
    .reduce((prevPromise, step) => prevPromise.then((macros) => {
      qbLog.count(step.stepName, macros.length);

      return step.fn(macros);
    }), startingPromise)
    .catch((err) => qbLog.error(err.message));
};
