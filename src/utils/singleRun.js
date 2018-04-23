/* eslint-disable no-undef */
const Bluebird = require('bluebird');
const readJson = require('./readJson');

/* When debugging in chrome, we need to delay execution.
 to have time for chrome to react and us to place a breakpoint ;) */
const DEBUG_DELAY = 100000;

const isDebugMode = typeof v8debug === 'object' || /--debug|--inspect/.test(process.execArgv.join(' '));

module.exports = function singleRun(_module, jsonName) {
  if (require.main !== _module) {
    return;
  }

  Bluebird
    .delay(isDebugMode ? DEBUG_DELAY : 0)
    .then(() => readJson(jsonName))
    .then((jsonContents) => _module.exports(jsonContents));
};
