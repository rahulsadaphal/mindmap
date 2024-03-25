// https://leetcode.com/problems/number-of-good-pairs/description/
// Count how many times each number appears. If a number appears n times, then n * (n – 1) // 2 good pairs can be made with this number.

var numIdenticalPairs = function (nums) {
    let obj = {}
    for (let i of nums) {
        obj[i] = (obj[i] || 0) + 1
    }
    let pairs = 0
    for (let key of Object.keys(obj)) {
        pairs += (obj[key] * (obj[key] - 1)) / 2
    }
    return pairs
};


let nums = [1, 2, 3, 1, 1, 3]
nums = [1,1,1,1]
console.log(numIdenticalPairs(nums))