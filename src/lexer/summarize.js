const { uniq } = require('lodash');

module.exports = function summarize(lines) {
  const dict = {};

  lines.forEach((line) => {
    const results = Array.isArray(line.results) ? line.results : [line.results];

    results.forEach((result) => {
      if (result.value !== result.text) {
        console.log(result.value, result.text);
      }

      dict[result.type] = dict[result.type] || [];
      dict[result.type].push(result.text);
    });
  }, {});

  return Object.entries(dict).reduce((obj, [type, texts]) => {
    obj[type] = uniq(texts).sort();

    return obj;
  }, {});
};
