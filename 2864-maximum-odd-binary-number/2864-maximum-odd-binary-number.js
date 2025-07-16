/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
  const ones = s.split('').filter(ele => ele === '1').length;
  const zeros = s.length - ones;

  return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1';
};
