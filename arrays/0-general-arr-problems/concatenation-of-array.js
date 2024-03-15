

var getConcatenation = function (nums) {
    let ans = new Array(nums.length * 2);
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i]
        ans[i+nums.length] = nums[i]
    }
    return ans
};

let nums = [1,2,1] // [1,2,1,1,2,1]
nums = [1,3,2,1] // [1,3,2,1,1,3,2,1]
let resp = getConcatenation(nums)
console.log(resp)