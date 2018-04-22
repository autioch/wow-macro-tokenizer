const tag = require('./tag');
const { saveJson } = require('../../utils');
const tagCategories = require('./tagCategories');
const tagDefinitions = require('./tagDefinitions');

module.exports = function tagger(grouperUnique) {
  const tagged = tag(grouperUnique);

  return saveJson(tagged, 'tagger')
    .then(() => saveJson(tagCategories, 'tagCategories'))
    .then(() => saveJson(tagDefinitions, 'tagDefinitions'))
    .then(() => tagged);
};
