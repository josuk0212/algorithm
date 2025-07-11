/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
  let result = "";

  for (let ele of words) {
    result += ele[0];
  }

  return result === s;
};
