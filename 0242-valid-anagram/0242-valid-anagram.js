/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const string1 = Array.from(s).sort().join(",");
  const string2 = Array.from(t).sort().join(",");

  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
};