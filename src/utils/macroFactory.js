module.exports = function macroFactory({
  lines = [],
  label = '',
  prefix = '',
  icon = ''
}) {
  const cleanLines = lines
    .map((line) => line.trim())
    .map((line) => line.endsWith(';') ? line.slice(0, -1) : line) // eslint-disable-line no-confusing-arrow
    .map((line) => line.trim())
    .filter((line) => !!line.length);

  return {
    label: [label],
    prefix: [prefix],
    icon: [icon],
    rawLines: cleanLines,
    parsedLines: [],
    hash: cleanLines.join('\n')
  };
};
