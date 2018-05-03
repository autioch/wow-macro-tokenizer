module.exports = function extractMacros(fileContents) {
  const macros = [];
  let currentMacroLines = [];

  fileContents
    .split('\n')
    .map((line) => line.trim())
    .forEach((line) => {
      if (line === '') {
        macros.push(currentMacroLines);
        currentMacroLines = [];
      } else {
        currentMacroLines.push(line);
      }
    });

  return macros.map((lines) => ({
    id: '',
    prefix: '',
    label: '',
    icon: '',
    lines
  }));
};
