const { isNoise } = require('./noise');

module.exports = function nearbyAdder(findNearby, minNearby) {
  return function addNearby(nearbyMacros, clusterId) {
    nearbyMacros.forEach((macro) => {
      if (isNoise(macro)) {
        macro.clusterId = clusterId;
      }

      if (macro.clusterId) {
        return;
      }

      macro.clusterId = clusterId;

      const nextNeighbours = findNearby(macro);

      if (nextNeighbours.length < minNearby) {
        return;
      }

      nearbyMacros.push(...nextNeighbours);
    });
  };
};
