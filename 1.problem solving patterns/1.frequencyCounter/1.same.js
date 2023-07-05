// const same = (arr1,arr2)=>{
//   let resHelper = [];
//   for(let val of arr1){
//     resHelper.push(val*val)
//   }
//   for(let j=0; j<arr2.length; j++){
//     let index = resHelper.findIndex(val=>val==arr2[j]);
//     if(index<0){
//       return false
//     }else{
//       resHelper = [...resHelper.slice(0,index),...resHelper.slice(index+1)];
//     }
//   }
//   if(resHelper.length==0){
//     return true
//   }
//   return false
// }

// const same = (arr1,arr2)=>{
//   if(arr1.length!==arr2.length){
//     return false;
//   }
//   for(let j=0; j<arr1.length; j++){
//     let index = arr2.indexOf(arr1[j]**2);
//     if(index<0){
//       return false
//     }else{
//       arr2.splice(index,1);
//     }
//   }
//   return true;
// }

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};
  for (let i = 0; i < arr1.length; i++) {
    counter1[arr1[i]] = (counter1[arr1[i]] || 0) + 1;
  }
  for (let j = 0; j < arr2.length; j++) {
    counter2[arr2[j]] = (counter2[arr2[j]] || 0) + 1;
  }
  for (key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }
    if (counter1[key] !== counter2[key ** 2]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 3, 3], [1, 4, 9, 9]));
