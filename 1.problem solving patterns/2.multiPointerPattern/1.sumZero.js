const sumZero = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < arr.length && j > 0) {
    console.log({ i, j });
    if (arr[i] + arr[j] === 0) {
      return [i, j];
    }
    if (arr[i] + arr[j] > 0) {
      j -= 1;
    }
    if (arr[i] + arr[j] < 0) {
      i += 1;
    }
  }
};

console.log(sumZero([-2, -1, 0, 2, 3]));
