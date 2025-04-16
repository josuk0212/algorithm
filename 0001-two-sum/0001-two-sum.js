/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const standard = nums[i];
    for (let y = i + 1; y < nums.length; y++) {
      if (standard + nums[y] === target) {
        return [i, y];
      }
    }
  }
};