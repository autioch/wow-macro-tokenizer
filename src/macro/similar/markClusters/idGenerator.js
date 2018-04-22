module.exports = function * idGenerator() {
  let nextId = 0;

  while (true) {
    nextId++; // eslint-disable-line no-plusplus
    yield nextId.toString();
  }
};
