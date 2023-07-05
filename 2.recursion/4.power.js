function power(num, pow) {
  if (pow === 0) return 1;
  if (pow === 1) return num;
  return num * power(num, pow - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
