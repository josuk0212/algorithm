/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  if (n % 2 === 1) {
    return 'x'.repeat(n);
  } else {
    return 'x'.repeat(n - 1) + 'y';
  }
};
