const { uniq, compact } = require('lodash');
const props = require('./props');

module.exports = function cleanup(macros) {
  macros.forEach((macro) => {
    props.forEach((prop) => {
      macro[prop] = compact(uniq(macro[prop])).sort();
    });
  });

  return macros;
};
