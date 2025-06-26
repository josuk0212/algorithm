/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  let count = 0, i = 0;

  while (i < s.length) {
    if (s[i] === ' ') {
      count++;
      if (count === k) {
        break;
      }
    }
    i++;
  }

  return s.slice(0, i);
};
