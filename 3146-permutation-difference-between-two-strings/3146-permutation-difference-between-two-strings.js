/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
  const tIndex = {};
  let result = 0;
    
  for (let i = 0; i < t.length; i++) {
    tIndex[t[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    result += Math.abs(i - tIndex[s[i]]);
  }

  return result;
};
