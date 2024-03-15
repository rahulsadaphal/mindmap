

var minPairSum = function(nums) {
    nums.sort((a,b) => a-b)
    let i = 0;
    let j = nums.length - 1
    let maxPairSum = Number.MIN_VALUE
    while(i<j){
        maxPairSum = Math.max(nums[i]+nums[j], maxPairSum)
        i++
        j--
    }
    return maxPairSum
};

let nums = [3,5,2,3]
nums = [3,5,4,2,4,6]
let resp = minPairSum(nums)
console.log(resp)