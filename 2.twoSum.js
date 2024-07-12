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
