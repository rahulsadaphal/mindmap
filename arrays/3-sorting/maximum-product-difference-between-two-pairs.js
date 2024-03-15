

var maxProductDifference = function(nums) {
    nums.sort((a,b) => a-b)
    return (nums[nums.length-1] * nums[nums.length-2]) - (nums[0] * nums[1])
};

let nums = [5,6,2,7,4]
nums = [4,2,5,9,7,4,8]
let resp = maxProductDifference(nums)
console.log(resp)