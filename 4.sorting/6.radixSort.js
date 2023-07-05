function getDigit(num, pos) {
  // returns value of the given position from backwards
  let val;

  while (pos >= 0) {
    val = num % 10;
    num = Math.floor(Math.abs(num) / 10);
    pos--;
  }

  return val;
}

function digitCount(num) {
  // returns the no of digits in a given number
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  // returns the max digit in the array
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    maxCount = Math.max(maxCount, digitCount(arr[i]));
  }

  return maxCount;
}

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }
    arr = [].concat(...digitBuckets);
  }

  return arr;
}

console.log(radixSort([9, 1, 54, 6549, 753]));

// console.log(getDigit(-12345, 4));
// console.log(digitCount(455));
// console.log(mostDigits([1, 455]));
