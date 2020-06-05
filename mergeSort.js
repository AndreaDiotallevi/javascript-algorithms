function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middleIndex = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middleIndex));
  let right = mergeSort(arr.slice(middleIndex));

  return mergeSortedArrays(left, right);
}

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
