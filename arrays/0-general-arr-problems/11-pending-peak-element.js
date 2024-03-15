

class Solution {
    findPeakElement(nums) {
        for(let i = 0; i<nums.length; i++){
            if(nums[i-1] <= nums[i] && nums[i] >= nums[i+1]){
                return i
            }
        }
    }
}

let nums = [1, 2, 1, 3, 5, 6, 4]
nums = [1,2,3,1]
// nums = [5, 10, 20, 15, 2, 23, 90, 67]
nums = [1, 7, 3, 5, 9]
console.log(new Solution().findPeakElement(nums))