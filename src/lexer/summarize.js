const { uniq } = require('lodash');
const { flattenDeep } = require('lodash');

module.exports = function summarize(lines) {
  const dict = {};

  lines.forEach((line) => {
    const results = flattenDeep(Array.isArray(line.results) ? line.results : [line.results]);

    results.forEach((result) => {
      if (result === null) {
        return;
      }
      if (result.value !== result.text) {
        console.log(result.value, result.text);
      }

      dict[result.type] = dict[result.type] || [];
      dict[result.type].push(result.text);
    });
  }, {});

  return Object.entries(dict)
    .sort(([a], [b]) => a.localeCompare(b))
    .reduce((obj, [type, texts]) => {
      obj[type] = uniq(texts).sort();

      return obj;
    }, {});
};
