/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  const scoreMap = score.map((num, idx) => [num, idx]);
  const result = [];

  scoreMap.sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < score.length; i++) {
    const idx = scoreMap[i][1];
    if (i === 0) {
      result[idx] = "Gold Medal";
    } else if (i === 1) {
      result[idx] = "Silver Medal";
    } else if (i === 2) {
      result[idx] = "Bronze Medal";
    } else {
      result[idx] = (i + 1).toString();
    }
  }

  return result;
};
