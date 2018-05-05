const parseLine = require('./parseLine');
const { saveJson, outputRoot } = require('utils');
const { flattenDeep, uniq, uniqBy, flatten, groupBy } = require('lodash');
const { join, relative } = require('path');

const APP_DATA_PATH = join(relative(outputRoot, __dirname), 'app', 'src', 'data');

function saveAppData(tokenized) {
  const lines = flatten(tokenized.map((macro) => macro.parsedLines));
  const uniqLines = uniqBy(lines, (line) => line.line).sort((a, b) => a.line.localeCompare(b.line));
  const groups = groupBy(flattenDeep(uniqLines.map((line) => line.tokens)), 'type');

  return saveJson({
    lines: uniqLines,
    summary: Object
      .entries(groups)
      .reduce((arr, [type, tokens]) => arr.concat({
        type,
        values: uniq(tokens.map((token) => token.value)).sort((a, b) => a.localeCompare(b))
      }), [])
      .sort((a, b) => a.type.localeCompare(b.type))
  }, APP_DATA_PATH);
}

module.exports = function tokenize(macros) {
  const tokenized = macros.map((macro) => ({
    ...macro,
    parsedLines: macro.rawLines.map(parseLine)
  }));

  const failed = tokenized.filter((macro) => macro.parsedLines.some((line) => !line.parsed));
  const ambiguous = tokenized.filter((macro) => macro.parsedLines.some((line) => line.ambiguous));
  const parsed = tokenized.filter((macro) => macro.parsedLines.every((line) => line.parsed && !line.ambiguous));

  return saveJson(failed, 'tokenizeFailed')
    .then(() => saveJson(ambiguous, 'tokenizeAmbiguous'))
    .then(() => saveAppData(tokenized))
    .then(() => parsed);
};
