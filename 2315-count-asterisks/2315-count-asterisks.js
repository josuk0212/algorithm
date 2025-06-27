/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
  let count = 0;
  let bar = false;

  for (let ele of s) {
    if (ele === '|') {
      bar = !bar;
  } else if (ele === '*' && !bar) {
      count++;
    }
  }

  return count;
};
