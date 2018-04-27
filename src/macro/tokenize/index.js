const parseLine = require('./parseLine');
const { saveJson, singleRun } = require('../../utils');
const { pick } = require('lodash');
const { join } = require('path');

const APP_DATA_PATH = join('..', 'src', 'macro', 'tokenize', 'app', 'src');

const simplifyParsedLine = (lineInfo) => lineInfo.tokens;
const simplifyFailedLine = (lineInfo) => pick(lineInfo, ['line', 'message', 'tokens']);
const simplifyMacros = (macros) => macros.map((macro) => pick(macro, ['lines', 'icon', 'label', 'occurences']));

function tokenizeMacro(macro) {
  const parsedLines = macro.lines.map((line) => parseLine(line));
  const parsed = parsedLines.every((line) => line.parsed);
  const ambiguous = parsedLines.some((line) => line.ambiguous);

  return {
    ...macro,
    parsed,
    ambiguous,
    lines: parsedLines.map(parsed ? simplifyParsedLine : simplifyFailedLine)
  };
}

module.exports = function tokenize(macros) {
  const tokenized = macros.map((macro) => tokenizeMacro(macro));
  const parsed = tokenized.filter((macro) => macro.parsed && !macro.ambiguous);
  const ambiguous = tokenized.filter((macro) => macro.ambiguous);
  const failed = tokenized.filter((macro) => !macro.parsed);

  return saveJson(simplifyMacros(parsed), 'tokenized.parsed')
    .then(() => saveJson(simplifyMacros(ambiguous), 'tokenized.ambiguous'))
    .then(() => saveJson(simplifyMacros(failed), 'tokenized.failed'))
    .then(() => saveJson(tokenized, join(APP_DATA_PATH, 'data'))) // for the app
    .then(() => parsed);
};

singleRun(module, 'dedupe');
