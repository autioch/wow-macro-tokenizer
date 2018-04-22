const { setDict } = require('../../utils');

/* Lodash indexby/keyby works in a different way. */
module.exports = function indexBy(macros) {
  return macros.reduce((dict, macro) => {
    const entry = setDict(dict, macro.clusterId, {
      count: 0,
      macros: []
    });

    entry.count++; // eslint-disable-line no-plusplus
    entry.macros.push(macro.lines.map((lineInfo) => lineInfo.line));

    return dict;
  }, {});
};
