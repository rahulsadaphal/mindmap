class Solution {
    minimumCost(nums) {
        // nums.sort((a, b) => a - b);
        // console.log(nums)
        let min_cost = Number.MAX_VALUE
        for (let i = 0; i < nums.length - 2; i++) {
            if(i==1) break;
            for (let j = i + 1; j < nums.length - 1; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    min_cost = Math.min(min_cost, nums[i] + nums[j] + nums[k])
                }
            }
        }

        return min_cost
    }
}

let nums = [1, 2, 3, 12]
nums = [5, 4, 3, 2, 1]
nums = [1,2,3]
nums = [1,1,1]
const res = new Solution().minimumCost(nums) //6
console.log('res - ', res)

// [23, 12,  32, 12,  3, 54, 23, 453, 45, 23]