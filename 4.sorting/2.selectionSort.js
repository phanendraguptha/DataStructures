//similar to bubble sort, but instead of first placing large values into
//sorted position, it places small values into sorted position
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let pos = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[pos] > arr[j]) {
        pos = j;
      }
    }
    if (i !== pos) {
      let temp = arr[i];
      arr[i] = arr[pos];
      arr[pos] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([19, 44, 38, 47, 15]));
