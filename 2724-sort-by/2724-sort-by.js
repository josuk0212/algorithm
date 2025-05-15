/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
  const result = arr.sort((a, b) => {
    const resultA = fn(a);
    const resultB = fn(b);

    if (resultA < resultB) {
      return -1;
    }
    if (resultA > resultB) {
      return 1;
    }
    return 0;
  });
  
  return result;
};
