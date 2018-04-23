/* eslint-disable id-length */
/* eslint-disable max-statements */
/* eslint-disable no-magic-numbers */

const REPLACE_COST = {
  NONE: 0,
  VALUE: 1,
  TYPE: 2
};

function buildMatrix(lengthA, lengthB) {
  const matrix = [];

  for (let i = 0; i <= lengthB; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= lengthA; j++) {
    matrix[0][j] = j;
  }

  return matrix;
}

function findCheapestChange(matrix, i, j, replaceCost) {
  const sub = matrix[i - 1][j - 1] + replaceCost;
  const ins = matrix[i][j - 1] + 1;
  const del = matrix[i - 1][j] + 1;

  return Math.min(sub, ins, del);
}

const isEqual = (elementA, elementB) => elementA === elementB;

function calculateReplaceCost(elementA, elementB) {
  if (isEqual(elementA, elementB)) { // null
    return REPLACE_COST.NONE;
  }
  if (elementA === null || elementB === null || !isEqual(elementA.type, elementB.type)) {
    return REPLACE_COST.TYPE;
  }

  return isEqual(elementA.value, elementB.value) ? REPLACE_COST.NONE : REPLACE_COST.VALUE;
}

module.exports = function leven(macroA, macroB) {
  const lineA = macroA.representation;
  const lineB = macroB.representation;

  const lengthA = lineA.length;
  const lengthB = lineB.length;

  if (lengthA === 0) {
    return lengthB;
  }

  if (lengthB === 0) {
    return lengthA;
  }

  const matrix = buildMatrix(lengthA, lengthB);

  for (let i = 1; i < lengthB; i++) {
    for (let j = 1; j < lengthA; j++) {
      const replaceCost = calculateReplaceCost(lineB[i], lineA[j]);

      matrix[i][j] = findCheapestChange(matrix, i, j, replaceCost);
    }
  }

  const distance = matrix[lengthB - 1][lengthA - 1];

  return distance;
};
