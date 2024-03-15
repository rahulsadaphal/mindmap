class Solution {
    static numberGame(nums) {
        const finalArr = []
        nums = nums.sort()
        const totalRounds = nums.length / 2
        for (let i = 0; i < totalRounds; i++) {
            const alice = nums.splice(0, 1)
            const bob = nums.splice(0, 1)
            finalArr.push(...bob, ...alice)
        }
        return finalArr
    }
}
let nums = [5, 4, 2, 3]
nums = [2,5]
const res = Solution.numberGame(nums)
console.log(res)