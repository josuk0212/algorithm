/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
  let result = '';
  for (let str of s) {
    let strNumber = str.charCodeAt();
    if (strNumber >= 65 && strNumber <= 90) {
      result += String.fromCharCode(strNumber + 32);
    } else {
      result += str;
    }
  }
  return result;
};
