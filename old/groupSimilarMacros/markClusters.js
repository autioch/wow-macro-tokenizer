/* eslint-disable max-len */
const MAX_DISTANCE = 2;
const MIN_NEARBY = 1;
const NOISE_ID = 'Noise';

/* Based on the DBSCAN algorithm
 * https://en.wikipedia.org/wiki/DBSCAN
 * https://github.com/upphiminn/jDBSCAN
 * http://yaikhom.com/2015/09/04/implementing-the-dbscan-clustering-algorithm.html
 */
module.exports = function markClusters(macros, distanceFn, maxDistance = MAX_DISTANCE, minNearby = MIN_NEARBY) {
  let nextClusterId = 0;

  const findNearby = (mainMacro) => macros.filter((macro) => mainMacro !== macro && distanceFn(mainMacro, macro) <= maxDistance); // TODO Cache this.

  function addNearby(nearbyMacros, clusterId) {
    nearbyMacros.forEach((macro) => {
      if (macro.clusterId === NOISE_ID) {
        macro.clusterId = clusterId;
      }

      if (macro.clusterId) {
        return;
      }

      macro.clusterId = clusterId;

      // /* Don't grow the cluster */
      // const nextNeighbours = findNearby(macro);
      //
      // if (nextNeighbours.length >= minNearby) {
      //   addNearby(nextNeighbours, clusterId);
      // }
    });
  }

  macros.forEach((macro) => {
    if (macro.clusterId) {
      return;
    }

    const nearbyMacros = findNearby(macro);

    if (nearbyMacros.length < minNearby) {
      macro.clusterId = NOISE_ID;

      return;
    }

    nextClusterId++;
    macro.clusterId = nextClusterId;

    addNearby(nearbyMacros, nextClusterId);
  });

  return macros;
};
