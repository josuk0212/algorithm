/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const middle = nums.length / 2;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[middle + i] === target) {
      return middle + i;
    }
  }
  return -1;
};
