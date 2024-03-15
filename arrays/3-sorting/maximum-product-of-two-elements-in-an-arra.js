// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

var maxProduct = function(nums) {
    nums.sort((a,b) => b-a)
    return (nums[0]-1) * (nums[1]-1)
};

let nums = [3,4,5,2] // 12
console.log(maxProduct(nums))