/* eslint no-underscore-dangle: 0 */

module.exports = function assignMarkers(macros) {
  macros.forEach((macro, index) => {
    macro.__markClustersMarker = index;
  });
};
