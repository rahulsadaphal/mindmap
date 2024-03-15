let arr = [1,2,11] // 2 1 11
// arr= [54, 546, 548, 60] //6054854654 
console.log(arr.sort((a,b) =>  Number(`${b}${a}` - Number(`${a}${b}`))))
//arrange these numbers to form the largest number possible
//treat these nums as string


