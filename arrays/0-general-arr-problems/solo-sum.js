

class Solution {
    leftRightSum(nums, n) {
        let resp = []
        for (let i = 0; i < n; i++) {
            let sum1 = nums.slice(0, i).reduce((acc, el) => el+acc, 0)
            let sum2 = nums.slice(i+1, n).reduce((acc, el) => el+acc, 0)
            resp.push(sum1+sum2)
        }
        return resp
    }
}

let nums = [1, 2, 3, 4, 5] //[14, 13, 12, 11, 10]
nums =[1, 2, -3, 4, -5] //[-2, -3, 2, -5, 4]
console.log(new Solution().leftRightSum(nums, nums.length)) 