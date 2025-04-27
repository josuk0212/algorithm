/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const hashTable = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (hashTable[s[i]] < hashTable[s[i + 1]]) {
      result -= hashTable[s[i]];
    } else {
      result += hashTable[s[i]];
    }
  }
  return result;
};
