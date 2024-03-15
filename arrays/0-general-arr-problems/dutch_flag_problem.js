

class Solution {
    dutchFlagSort(nums) {

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length - i - 1; j++) {
                if (nums[j] > nums[j+1]) {
                    let temp = nums[j]
                    nums[j] = nums[j+1]
                    nums[j+1] = temp
                }
            }
        }
        let finalStr = ''
        nums.map(el => {
            finalStr += el + " "
        })
        console.log(finalStr)
    }
}


let nums = [1, 0, 2, 1, 0, 2, 1, 0]
// nums = [2,1,0]
const resp = new Solution().dutchFlagSort(nums)