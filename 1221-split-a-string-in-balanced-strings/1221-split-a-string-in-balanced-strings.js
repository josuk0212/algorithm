/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let startR = 0;
  let count = 0;

  for (let ele of s) {
    if (ele === 'R') {
      startR++;
    } else {
      startR--;
    }

    if (startR === 0) {
      count++;
    }
  }

  return count;
};
