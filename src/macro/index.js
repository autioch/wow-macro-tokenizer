const Bluebird = require('bluebird');
const qbLog = require('qb-log');

const steps = [
  require('./reader'),
  require('./parser'),
  require('./custom'),
  require('./dedupe'),
  require('./tokenize'),
  require('./tagger'),
  require('./icons'),
  require('./app')
];

module.exports = function getMacros(dir) {
  const startingPromise = Bluebird.resolve(dir);

  return steps
    .reduce((prevPromise, step) => prevPromise.then((macros) => {
      qbLog.info('MACRO COUNT', macros.length);

      return step(macros);
    }), startingPromise)
    .catch((err) => console.log(err.message));
};
