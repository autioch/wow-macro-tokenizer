const classTags = require('./classTags');
const simpleTags = require('./simpleTags');

module.exports = classTags.concat(simpleTags).map((tag, id) => ({
  ...tag,
  id
}));
