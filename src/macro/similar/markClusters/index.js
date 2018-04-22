const idGenerator = require('./idGenerator');
const nearbyFinder = require('./nearbyFinder');
const assignMarkers = require('./assignMarkers');
const nearbyAdder = require('./nearbyAdder');
const { markAsNoise } = require('./noise');

const MAX_DISTANCE = 20;
const MIN_NEARBY = 5;

module.exports = function markClusters(macros, distanceFn, maxDistance = MAX_DISTANCE, minNearby = MIN_NEARBY) {
  const generateId = idGenerator();
  const findNearby = nearbyFinder(maxDistance, macros, distanceFn);
  const addNearby = nearbyAdder(findNearby, minNearby);

  assignMarkers(macros);

  macros.forEach((macro) => {
    if (macro.clusterId) {
      return;
    }

    const nearby = findNearby(macro);

    if (nearby.length < minNearby) {
      markAsNoise(macro);

      return;
    }

    macro.clusterId = generateId.next().value;

    if (nearby.length >= minNearby) {
      addNearby(nearby, macro.clusterId);
    }
  });

  return macros;
};
