/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const total = (nums.length * (nums.length + 1)) / 2;
  const numsSum = nums.reduce((acc, cur) => acc + cur, 0);

  return total - numsSum;
};
