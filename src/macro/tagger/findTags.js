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
        def.spellNames &&
        token.type === 'spellName' &&
        def.spellNames.some((spellName) => spellName === token.value)
      ) {
        return true;
      }

      return false;
    });

  return foundTags.map((def) => def.id);
}

module.exports = function tag(macro) {
  const tokenTags = flattenDeep(macro.lines).map((token) => getTokenTags(token));

  return {
    ...macro,
    tags: uniq(flatten(tokenTags)).sort()
  };
};
