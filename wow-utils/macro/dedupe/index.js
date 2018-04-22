const merge = require('./merge');
const cleanup = require('./cleanup');
const saveJson = require('../../utils/saveJson');

module.exports = function dedupe(parsedMacros) {
  const uniqueMacros = merge(parsedMacros);
  const cleanMacros = cleanup(uniqueMacros);

  return saveJson(cleanMacros, 'dedupe').then(() => cleanMacros);
};
