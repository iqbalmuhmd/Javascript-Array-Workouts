/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * @param {number[]} nums - The array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - The indices of the two numbers.
 */

const twoSum = function (nums, target) {
  const prevVal = {};
  for (let i = 0; i < nums.length; i++) {
    const currVal = nums[i];
    const neededVal = target - currVal;
    const index2 = prevVal[neededVal];
    if (index2 != null) {
      return [index2, i];
    } else {
      prevVal[currVal] = i;
    }
  }
};
