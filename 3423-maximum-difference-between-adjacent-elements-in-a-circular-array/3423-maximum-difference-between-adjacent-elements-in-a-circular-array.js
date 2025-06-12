/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
  let answer = Math.abs(nums[0] - nums[nums.length - 1]);
  for (let i = 0; i < nums.length - 1; i++) {
    answer = Math.max(answer, Math.abs(nums[i] - nums[i + 1]));
  }
  return answer;
};
