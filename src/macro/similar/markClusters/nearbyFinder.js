/* eslint no-underscore-dangle: 0 */

module.exports = function nearbyFinder(maxDistance, points, distanceFn) {
  const cache = {};

  return function findAdjacent(mainPoint) {
    return points.filter((point) => {
      if (mainPoint === point) {
        return false;
      }
      const mainIndex = mainPoint.__markClustersMarker;
      const pointIndex = point.__markClustersMarker;
      const cacheIndex = mainIndex > pointIndex ? `${mainIndex}+${pointIndex}` : `${pointIndex}+${mainIndex}`;

      if (cache[cacheIndex] === undefined) { // eslint-disable-line no-undefined
        cache[cacheIndex] = distanceFn(mainPoint, point) <= maxDistance;
      }

      return cache[cacheIndex];
    });
  };
};
