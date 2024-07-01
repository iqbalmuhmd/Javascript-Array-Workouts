/**
 * Given a string array words, return an array of all characters that show up in all strings within the words
 * (including duplicates). You may return the answer in any order.
 * 
 * @param {string[]} words
 * @return {string[]}
 */

const commonChars = function (words) {
  let res = [];
  for (let wo of words[0]) {
    if (words.every((word) => word.includes(wo))) {
      res.push(wo);
      words = words.map((word) => word.replace(wo, ""));
    }
  }
  return res;
};
