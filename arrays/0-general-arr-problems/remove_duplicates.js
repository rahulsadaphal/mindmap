


class Solution {
    removeDuplicates(nums) {
        let i = 0
        while (i < nums.length - 1) {
            if (nums[i] == nums[i + 1]) {
                nums.splice(i + 1, 1)
            } else {
                i++
            }
        }
        return nums
    }
}

let nums = [0, 1, 1, 1, 2, 2,3] //[1,2]
const res = new Solution().removeDuplicates(nums)
console.log(res)