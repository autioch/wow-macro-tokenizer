const Bluebird = require('bluebird');

const qbLog = require('qb-log');

module.exports = function waterfall(steps, initialValue = Bluebird.resolve()) {
  return steps
    .reduce((prevPromise, step) => prevPromise.then(step), initialValue)
    .catch((err) => qbLog.error(err.message));
};
