/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const value = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    result += value;
  }

  return result;
};
