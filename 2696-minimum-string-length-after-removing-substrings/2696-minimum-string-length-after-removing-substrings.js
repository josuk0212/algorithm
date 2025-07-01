/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  const result = [];

  for (let ele of s) {
    const last = result[result.length - 1];

    if ((last === 'A' && ele === 'B') || (last === 'C' && ele === 'D')) {
      result.pop();
    } else {
      result.push(ele);
    }
  }

  return result.length;
};
