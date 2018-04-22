module.exports = function setDict(dict, key, value) {
  if (!dict[key]) {
    dict[key] = value;
  }

  return dict[key];
};
