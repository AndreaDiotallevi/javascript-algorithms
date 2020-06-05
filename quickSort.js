function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

module.exports = quickSort;
