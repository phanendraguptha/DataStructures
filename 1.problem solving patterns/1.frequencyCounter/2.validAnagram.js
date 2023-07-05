const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }

  let counter1 = {};
  let counter2 = {};
  for (let i = 0; i < str1.length; i++) {
    counter1[str1[i]] = (counter1[str1[i]] || 0) + 1;
  }
  for (let j = 0; j < str2.length; j++) {
    counter2[str2[j]] = (counter2[str2[j]] || 0) + 1;
  }

  for (key in counter1) {
    if (!(key in counter2) || counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("zaa", "aaz"));
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
