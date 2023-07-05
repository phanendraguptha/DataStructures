// function collectOdds(arr) {
//   let result = [];

//   function helper(arr) {
//     if (arr.length === 0) return;

//     if (arr[0] % 2 !== 0) result.push(arr[0]);

//     helper(arr.slice(1));
//   }
//   helper(arr);

//   return result;
// }

// this is a pure recursion
function collectOdds(arr) {
  let result = [];
  if (arr.length === 0) return [];

  if (arr[0] % 2 !== 0) result.push(arr[0]);

  result = result.concat(collectOdds(arr.slice(1)));
  return result;
}

console.log(collectOdds([1, 5, 8, 9]));
