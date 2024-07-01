/**
 * You are given an array of characters letters that is sorted in non-decreasing order, and a character
 * target. There are at least two different characters in letters.
 *
 * Return the smallest character in letters that is lexicographically greater than target. If such a
 * character does not exist, return the first character in letters.
 *
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

const nextGreatestLetter = function (letters, target) {
  let set = new Set(letters);
  for (let x of set) {
    if (x > target) {
      return x;
    }
  }
  return letters[0];
};
