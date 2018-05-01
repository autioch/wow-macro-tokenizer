/* eslint id-blacklist: 0 */
const { flattenDeep, flatten, uniq } = require('lodash');
const tags = require('./tags');

function getTokenTags(token) {
  const foundTags = tags
    .filter((def) => {
      if (
        def.tokenTypes &&
        def.tokenTypes.some((type) => type === token.type)
      ) {
        return true;
      }

      if (
        token.type === 'identifier' &&
        def.identifiers &&
        def.identifiers.some((identifier) => identifier === token.value)
      ) {
        return true;
      }

      if (
        token.type === 'command' &&
        def.commandNames &&
        def.commandNames.some((commandName) => commandName === token.value)
      ) {
        return true;
      }

      return false;
    });

  return foundTags.map((def) => def.id);
}

module.exports = function findTags(macro) {
  const tokenTags = flattenDeep(macro.lines.map((line) => line.tokens)).map((token) => getTokenTags(token));

  if (macro.lines.some((line) => line.grammar)) {
    tokenTags.push(tags.find((tag) => tag.label === 'Script & Config').id);
  }

  return {
    ...macro,
    tags: uniq(flatten(tokenTags)).sort()
  };
};
