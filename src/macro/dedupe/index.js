const merge = require('./merge');
const { saveJson, singleRun } = require('../../utils');

module.exports = function dedupe(parsedMacros) {
  const uniqueMacros = merge(parsedMacros);

  return saveJson(uniqueMacros, 'dedupe').then(() => uniqueMacros);
};

singleRun(module, 'custom');
