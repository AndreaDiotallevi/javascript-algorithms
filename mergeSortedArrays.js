function mergeSortedArrays(left, right) {
  let i = 0;
  let j = 0;
  let mergedArray = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArray.push(left[i++]);
    } else {
      mergedArray.push(right[j++]);
    }
  }

  while (i < left.length) {
    mergedArray.push(left[i++]);
  }

  while (j < right.length) {
    mergedArray.push(right[j++]);
  }

  return mergedArray;
}

module.exports = mergeSortedArrays;
