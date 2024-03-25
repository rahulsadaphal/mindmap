// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

// var smallerNumbersThanCurrent = function(nums) {
//     let finalArr = new Array(nums)

//     for(let i = 0; i<nums.length; i++){
//         let count = 0;
//         for(let j = 0 ; j <nums.length; j++){
//             if(i !== j && nums[i] > nums[j]){
//                 count++
//             }
//         }
//         finalArr[i] = count
//     }
//     return finalArr;
// };



/*

The key thing to understand here is that the numbers are in the range of 0 to 100.
This allows us to compute the amount of smaller numbers for every possible number in constant time.

Let's define: smaller(n) = amount of numbers smaller than n in nums.

We start off by initializing two arrays:

const frequencies = new Array(101).fill(0);
const smaller = new Array(101).fill(0);
Then we want to compute what is the frequency of any given 0 <= n <= 100 in the array:

nums.forEach(num => frequencies[num]++);
Now for the important part:

We will compute smaller(n) for every 0 <= n <= 100.

The value of smaller(n) is how many numbers are smaller than the number before it plus the frequency of that number in nums.

(If that sentence didn't make sense to you, read it again or try playing with some examples. Continue reading after you're comfortable with the idea)

Notice how this is exactly the definition from the beginning.
"how many numbers are smaller than the number before it" is just smaller(n-1).

So in other words: smaller(n) = smaller(n-1) + frequency(n-1)

This is great, we can now just compute smaller(n) on the go:

 for (let i = 1; i < 101; i++) {
   smaller[i] = smaller[i - 1] + frequencies[i - 1];
}
At last, we actually don't want every smaller(n), just the ones from the nums array, and in the same order. So we will map every num in nums to smaller(num):

return nums.map(num => smaller[num]);
And this is the entire code:

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
  const frequencies = new Array(101).fill(0);
  const smaller = new Array(101).fill(0);

  nums.forEach(num => frequencies[num]++);

  for (let i = 1; i < 101; i++) {
    smaller[i] = smaller[i - 1] + frequencies[i - 1];
  }

  return nums.map(num => smaller[num]);
}