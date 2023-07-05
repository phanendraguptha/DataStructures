// const maxSubArraySum = (arr, num) => {
//   if (arr.length < num) {
//     return null;
//   }

//   let maxSum = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let sum = 0;
//     for (let j = 0; j < num; j++) {
//       console.log(sum);
//       sum = sum + arr[i + j];
//     }
//     if (sum > maxSum) {
//       maxSum = sum;
//     }
//   }
//   return maxSum;
// };

const maxSubArraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 9], 3));
