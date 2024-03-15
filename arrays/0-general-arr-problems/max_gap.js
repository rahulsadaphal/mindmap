

class Solution {
    static maxgap(nums) {
        if (nums.length < 2) {
            return 0
        }
        nums.sort()
        // console.log(nums)
        let i = 0
        let maxDiff = Number.MIN_VALUE
        while (i < nums.length - 1) {
            let diff = Math.abs(nums[i] - nums[i+1])
            maxDiff = Math.max(maxDiff, diff)
            i++;
        }
        return maxDiff
    }
}

let nums = [3, 6, 9, 1]
const resp = Solution.maxgap(nums)
console.log(resp)