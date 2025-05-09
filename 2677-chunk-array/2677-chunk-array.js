/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  const result = [];
  let current = [];

  for (let i = 0; i < arr.length; i++) {
    current.push(arr[i]);

    if (current.length === size) {
      result.push(current);
      current = [];
    }
  }

  if (current.length > 0) {
    result.push(current);
  }

  return result;
};
