const leven = require('leven');

let callCount = 0;

module.exports = function distanceFunction(pointA, pointB) {
  callCount++; // eslint-disable-line no-plusplus

  return leven(pointA.content.join('\n'), pointB.content.join('\n'));
};

module.exports.callCount = () => callCount;
