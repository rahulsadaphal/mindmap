// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/
// this is sliding window problem

var maximumSubarraySum = function (nums, k) {
    let max = 0

    let s = new Set()
    let left = 0, right = 0;
    let currentSum = 0
    while (right < nums.length) {

        if (!s.has(nums[right])) {
            s.add(nums[right])
            currentSum += nums[right]
            if (s.size > k) {
                s.delete(nums[left]);
                currentSum -= nums[left]
                left++
            }
            if (s.size == k) {
                max = Math.max(max, currentSum)
            }
            right++
        } else {
            s.delete(nums[left]);
            currentSum -= nums[left]
            left++
        }
    }
    return max
};

let nums = [1, 5, 4, 2, 9, 9, 9], k = 3 // 15
nums=[1,2,3,2,2]
// nums = [4,4,4], k = 3 // 0
console.log(maximumSubarraySum(nums, k))