/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [];

  for (let ele of set2) {
    if (set1.has(ele)) {
      result.push(ele);
    }
  }

  return result;
};
