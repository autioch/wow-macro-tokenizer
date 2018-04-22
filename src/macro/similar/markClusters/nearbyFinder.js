/* eslint no-underscore-dangle: 0 */

module.exports = function nearbyFinder(maxDistance, macros, distanceFn) {
  const cache = {};

  return function findAdjacent(mainMacro) {
    return macros.filter((macro) => {
      if (mainMacro === macro) {
        return false;
      }
      const mainIndex = mainMacro.__markClustersMarker;
      const macroIndex = macro.__markClustersMarker;
      const cacheIndex = mainIndex > macroIndex ? `${mainIndex}+${macroIndex}` : `${macroIndex}+${mainIndex}`;

      if (cache[cacheIndex] === undefined) { // eslint-disable-line no-undefined
        cache[cacheIndex] = distanceFn(mainMacro, macro) <= maxDistance;
      }

      return cache[cacheIndex];
    });
  };
};
