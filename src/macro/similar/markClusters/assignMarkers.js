/* eslint no-underscore-dangle: 0 */

module.exports = function assignMarkers(points) {
  points.forEach((point, index) => {
    point.__markClustersMarker = index;
  });
};
