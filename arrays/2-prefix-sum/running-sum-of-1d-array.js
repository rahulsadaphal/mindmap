// https://leetcode.com/problems/running-sum-of-1d-array/description/



var runningSum = function (nums) {
    let final = new Array(nums.length)
    final[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        final[i] = final[i - 1] + nums[i]
    }
    return final
};

let nums = [1, 2, 3, 4] // [1,3,6,10]
// nums = [1,1,1,1,1] // [1,2,3,4,5]
console.log(runningSum(nums))