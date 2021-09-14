// 19.

const collection = ["flower", "flow", "flight"];
const collection2 = ["dog", "racecar", "car"];
const collection3 = ["leets", "leetcode", "leetc", "leeds"];

function longestCommonPrefix(array) {
  if (!array || array.length === 0)
    return "";

  sorted = array.sort();
  first = sorted[0];
  last = sorted[sorted.length - 1];
  let i = 0;
  while (i < first.length && first.charAt(i) === last.charAt(i)) i++
  return first.substr(0, i);
}

longestCommonPrefix(collection3);
