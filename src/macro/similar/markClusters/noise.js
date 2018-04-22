const NOISE_ID = 'Noise';

module.exports = {

  isNoise(macro) {
    return macro.clusterId === NOISE_ID;
  },

  markAsNoise(macro) {
    macro.clusterId = NOISE_ID;
  }

};
