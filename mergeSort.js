const mergeSortedArrays = require("./mergeSortedArrays");

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middleIndex = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middleIndex));
  let right = mergeSort(arr.slice(middleIndex));

  return mergeSortedArrays(left, right);
}

module.exports = mergeSort;
