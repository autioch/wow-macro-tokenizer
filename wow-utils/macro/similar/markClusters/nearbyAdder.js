const { isNoise } = require('./noise');

module.exports = function nearbyAdder(findNearby, minNearby) {
  return function addNearby(nearby, clusterId) {
    nearby.forEach((point) => {
      if (isNoise(point)) {
        point.clusterId = clusterId;
      }

      if (point.clusterId) {
        return;
      }

      point.clusterId = clusterId;

      const nextNeighbours = findNearby(point);

      if (nextNeighbours.length < minNearby) {
        return;
      }

      nearby.push(...nextNeighbours);
    });
  };
};
