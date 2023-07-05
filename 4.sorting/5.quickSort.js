//from code evolution
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 6, 1, 9, 25]));

var findDisappearedNumbers = function (nums) {
  if (nums.length === 1) return [];

  let sortedNums = quickSort(nums);

  let i = 0;
  let j = 1;
  let results = [];
  while (i < sortedNums.length) {
    if (sortedNums[i] === j) {
      i++;
      j++;
    } else {
      results.push(j);
      i++;
    }
  }

  return results;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
