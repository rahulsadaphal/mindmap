// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/



var countKDifference = function (nums, k) {
    nums.sort((a, b) => a - b)
    let count = 0
    let i = 0; let j = nums.length - 1
    while (i < nums.length - 1) {
        if (i == j) {
            i++;
            j = nums.length - 1
        }
        if (Math.abs(nums[i] - nums[j]) == k) {
            count++
        }
        j--
    }
    return count
};

let nums = [1, 2, 2, 1], k = 1 // 4
nums = [1,3], k = 3 // 0
nums = [3,2,1,5,4], k = 2 // 3
console.log(countKDifference(nums, k))