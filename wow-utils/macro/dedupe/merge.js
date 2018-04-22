const props = require('./props');

function newMacro(content) {
  return props.reduce((macro, prop) => Object.assign(macro, {
    [prop]: []
  }), {
    content,
    occurences: 0
  });
}

module.exports = function dedupe(macros) {
  const seen = {};

  macros
    .map((macro) => ({
      macro,
      hash: macro.content.join('\n')
    }))
    .forEach(({ hash, macro }) => {
      if (!seen[hash]) {
        seen[hash] = newMacro(macro.content);
      }

      const uniqueMacro = seen[hash];

      props.forEach((prop) => {
        uniqueMacro[prop].push(macro[prop]);
        uniqueMacro.occurences++; // eslint-disable-line no-plusplus
      });
    });

  return Object.values(seen);
};
