/* eslint id-blacklist: 0 */
const tagDefinitions = require('./tagDefinitions');

module.exports = function tag(macro) {
  const haystack = macro.content.join('\n');

  macro.tags = [];
  tagDefinitions.forEach((definition) => {
    if (definition.keywords.some((keyword) => haystack.includes(keyword))) {
      macro.tags.push(definition.id);
    }
  });

  return macro;
};
