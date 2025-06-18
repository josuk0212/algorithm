/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let result = '';

  for (let ele of address) {
    if (ele === '.') {
        result += '[.]';
    } else {
      result += ele;
    }
  }
  return result;
};
