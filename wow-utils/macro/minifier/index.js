const minify = require('./minify');
const { saveJson } = require('../../utils');

module.exports = function minifier(tagged) {
  const minified = minify(tagged);

  return saveJson(minified, 'minified').then(() => minified);
};
