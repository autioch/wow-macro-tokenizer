module.exports = function macroFactory({
  lines = [],
  label = '',
  prefix = '',
  icon = ''
}) {
  const cleanLines = lines.map((line) => line.trim());

  return {
    label: [label],
    prefix: [prefix],
    icon: [icon],
    lines: cleanLines,
    hash: cleanLines.join('\n')
  };
};
