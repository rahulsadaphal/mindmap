

class Solution {
    moveTwos(nums) {
        let n = nums.length
        let count = 0
        let i = 0
        while (i < n - count) {
            if (nums[i] == 2) {
                nums.push(...nums.splice(i, 1))
                count++
            } else {
                i++
            }
        }

    }
}

let nums = [1, 2, 3, 2, 4, 5] //1 3 4 5 2 2
nums = [2,2,1]
nums = [2,2]
new Solution().moveTwos(nums)
console.log(nums) 