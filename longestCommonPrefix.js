function longestCommonPrefix(strs) {
  if (strs === null || strs.length === 0) {
    return "";
  }

  if (strs.length === 1) {
    return strs[0];
  }

  if (strs.length === 2) {
    let a = strs[0];
    let b = strs[1];
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) {
      i++;
    }
    return a.slice(0, i);
  }

  let middleIndex = Math.floor(strs.length / 2);
  let left = longestCommonPrefix(strs.slice(0, middleIndex));
  let right = longestCommonPrefix(strs.slice(middleIndex));
  return longestCommonPrefix([left, right]);
}

module.exports = longestCommonPrefix;
