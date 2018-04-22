/* eslint id-blacklist: 0 */
const tagDefinitions = require('./tagDefinitions');

module.exports = function tag(list) {
  list.forEach((item) => {
    const haystack = item.content.join('\n');

    item.tags = [];
    tagDefinitions.forEach((definition) => {
      if (definition.keywords.some((keyword) => haystack.includes(keyword))) {
        item.tags.push(definition.id);
      }
    });
  });

  return list;
};
