function naiveSearch(str, item) {
  let occurance = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < item.length; j++) {
      if (str[i + j] !== item[j]) {
        break;
      }
      if (j === item.length - 1) {
        occurance++;
      }
    }
  }
  return occurance;
}

console.log(naiveSearch("hahaomg", "omg"));
