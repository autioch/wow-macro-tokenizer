/* Lodash indexby/keyby works in a different way. */
module.exports = function indexBy(macros) {
  const dict = {};

  macros.forEach(({ clusterId, content }) => {
    if (!dict[clusterId]) {
      dict[clusterId] = {
        count: 0,
        macros: []
      };
    }

    dict[clusterId].count++; // eslint-disable-line no-plusplus
    dict[clusterId].macros.push(content);
  });

  return dict;
};
