/* eslint-disable id-length */
/* eslint-disable max-statements */

module.exports = function leven(macroA, macroB) {
  const lineA = macroA.representation;
  const lineB = macroB.representation;

  if (lineA.length === 0) {
    return lineB.length;
  }

  if (lineB.length === 0) {
    return lineA.length;
  }

  const matrix = [];

  for (let i = 0; i <= lineB.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= lineA.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i < lineB.length; i++) {
    for (let j = 1; j < lineA.length; j++) {
      if (lineB[i] && lineA[j] && (lineB[i].type === lineA[j].type)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        const sub = matrix[i - 1][j - 1] + 1;
        const ins = matrix[i][j - 1] + 1;
        const del = matrix[i - 1][j] + 1;

        matrix[i][j] = Math.min(sub, Math.min(ins, del));
      }
    }
  }

  return matrix[lineB.length][lineA.length];
};
