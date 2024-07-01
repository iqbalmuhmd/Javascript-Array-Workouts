/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function (strs) {
  let cur = strs[0];
  let temp = "";
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < cur.length; j++) {
      if (cur[j] === strs[i][j]) {
        temp += cur[j];
      } else {
        break;
      }
    }
    cur = temp;
    temp = "";
  }
  return cur;
};
