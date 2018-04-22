const merge = require('./merge');
const saveJson = require('../../utils/saveJson');

module.exports = function dedupe(parsedMacros) {
  const uniqueMacros = merge(parsedMacros);

  return saveJson(uniqueMacros, 'dedupe').then(() => uniqueMacros);
};
