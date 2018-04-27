const parseLine = require('./parseLine');
const { saveJson, singleRun } = require('../../utils');
const { flattenDeep, uniq, pick } = require('lodash');
const { join } = require('path');

const APP_DATA_PATH = join('..', 'src', 'macro', 'tokenize', 'app', 'src');

function tokenizeMacro({ icon, label, occurences, lines }) {
  return {
    icon,
    label,
    occurences,
    lines: lines.map(parseLine)
  };
}

function getParsedMacros(macros) {
  return macros
    .filter((macro) => macro.lines.every((line) => line.parsed && !line.ambiguous))
    .map((macro) => ({
      ...macro,
      lines: macro.lines.map((lineInfo) => lineInfo.tokens)
    }));
}

function getFailedMacros(macros) {
  return macros
    .filter((macro) => macro.lines.some((line) => !line.parsed))
    .map((macro) => ({
      ...macro,
      lines: macro.lines.map((lineInfo) => pick(lineInfo, ['line', 'message', 'tokens']))
    }));
}

function getAmbiguousMacros(macros) {
  return macros.filter((macro) => macro.lines.some((line) => line.ambiguous));
}

function getSummary(lines) {
  const dict = lines.reduce((obj, lineInfo) => {
    flattenDeep(lineInfo.tokens).forEach((token) => {
      if (obj[token.type]) {
        obj[token.type].push(token.value);
      } else {
        obj[token.type] = [token.value];
      }
    });

    return obj;
  }, {});

  return Object
    .entries(dict)
    .reduce((arr, [type, values]) => arr.concat({
      type,
      values: uniq(values).sort((a, b) => a.localeCompare(b)) // eslint-disable-line id-length
    }), [])
    .sort((a, b) => a.type.localeCompare(b.type)); // eslint-disable-line id-length
}

module.exports = function tokenize(macros) {
  const tokenized = macros.map((macro) => tokenizeMacro(macro));
  const parsed = getParsedMacros(tokenized);
  const failed = getFailedMacros(tokenized);
  const ambiguous = getAmbiguousMacros(tokenized);
  const lines = tokenized.reduce((arr, macro) => arr.concat(macro.lines), []);

  return saveJson(parsed, 'tokenized.parsed')
    .then(() => saveJson(failed, 'tokenized.failed'))
    .then(() => saveJson(ambiguous, 'tokenized.ambiguous'))
    .then(() => saveJson({
      lines,
      summary: getSummary(lines)
    }, join(APP_DATA_PATH, 'data')))
    .then(() => parsed);
};

singleRun(module, 'dedupe');
