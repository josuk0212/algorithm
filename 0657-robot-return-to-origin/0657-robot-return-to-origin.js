/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let xCount = 0;
  let yCount = 0;

  for (let move of moves) {
    if (move === 'U') {
      yCount++;
    } else if (move === 'D') {
      yCount--;
    } else if (move === 'L') {
      xCount++;
    } else if (move === 'R') {
      xCount--;
    }
  }

  if (xCount === 0 && yCount === 0) {
    return true;
  } else {
    return false;
  }
};
