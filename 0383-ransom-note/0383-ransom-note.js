/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const obj = {};

  for (let ele of magazine) {
    obj[ele] = (obj[ele] || 0) + 1;
  }

  for (let ele of ransomNote) {
    if (!obj[ele]) {
      return false;
    }
    obj[ele]--;
  }

  return true;
};
