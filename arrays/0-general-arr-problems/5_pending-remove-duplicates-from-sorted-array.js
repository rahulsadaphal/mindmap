

// var removeDuplicates = function(nums) {
//    let i = 0;
//    let j = i+1
//    let count = 0
//    while(i<nums.length-1 && j< nums.length){
//     if(nums[i] == nums[j]){
//         nums[j] = Number.POSITIVE_INFINITY
//         count++
//         j++
//     }else{
//         i = j
//         j=i+1
//     }
//    }
//    nums.sort((a,b) => a-b)
//    return nums.length-count
// };

// let nums = [1,1,2]
// nums = [0,0,1,1,1,2,2,3,3,4]
// nums = [-3,-1,0,0,0,3,3]
// let resp = removeDuplicates(nums)
// console.log(resp, nums)



class Solution {
    removeDuplicates(nums) {
      if(nums.length == 0) return 0;
        let i = 0
        while (i < nums.length - 1) {
            if (nums[i] == nums[i + 1]) {
                nums.splice(i + 1, 1)
            } else {
                i++
            }
        }
        return nums.length
    }
}

let nums = [-1, 0 ,1,1,2,3,3]
console.log(new Solution().removeDuplicates(nums), nums)