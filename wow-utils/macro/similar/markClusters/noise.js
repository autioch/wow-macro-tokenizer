const NOISE_ID = 'Noise';

module.exports = {

  isNoise(point) {
    return point.clusterId === NOISE_ID;
  },

  markAsNoise(point) {
    point.clusterId = NOISE_ID;
  }

};
