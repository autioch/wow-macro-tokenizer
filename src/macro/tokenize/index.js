const parseLine = require('./parseLine');
const { saveJson, singleRun } = require('../../utils');
const { pick } = require('lodash');

const simplifyParsedLine = (lineInfo) => pick(lineInfo, ['results']);
const simplifyFailedLine = (lineInfo) => pick(lineInfo, ['line', 'message', 'results']);

function tokenizeMacro(macro) {
  const lines = macro.lines.map((line) => parseLine(line));

  const parsed = lines.every((line) => line.parsed);

  return {
    parsed,
    failed: !parsed,
    ambiguous: lines.some((line) => line.ambiguous),
    lines: lines.map(parsed ? simplifyParsedLine : simplifyFailedLine)
  };
}

module.exports = function tokenize(macros) {
  const tokenized = macros.map((macro) => tokenizeMacro(macro));
  const parsed = tokenized.filter((macro) => macro.parsed && !macro.ambiguous);
  const ambiguous = tokenized.filter((macro) => macro.ambiguous);
  const failed = tokenized.filter((macro) => !macro.parsed);

  return saveJson(parsed, 'tokenized.parsed')
    .then(() => saveJson(ambiguous, 'tokenized.ambiguous'))
    .then(() => saveJson(failed, 'tokenized.failed'))
    .then(() => parsed);
};

singleRun(module, 'dedupe');
