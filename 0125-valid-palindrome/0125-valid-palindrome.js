/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const lowerString = s.toLowerCase().replaceAll(" ", "");
  let resultString = "";

  for (let i = 0; i < lowerString.length; i++) {
    if ((lowerString[i] >= "a" && lowerString[i] <= "z")
    || (lowerString[i] >= 0 && lowerString[i] <= 9)) {
      resultString += lowerString[i];
    }
  }

  for (let y = 0; y < resultString.length / 2; y++) {
    if (resultString[y] !== resultString[resultString.length - 1 - y]) {
      return false;
    }
  }
  return true;
};