/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  let count = 0;

  for (let ele of details) {
    const age = parseInt(ele.slice(11, 13), 10);
    if (age > 60) {
      count++;
    }
  }

  return count;
};
