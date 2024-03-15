

var buildArray = function (nums) {
    let ans = new Array(nums.length);
    for (let i = 0; i < ans.length; i++) {
        ans[i] = nums[nums[i]]
    }
    return ans
};

let nums = [0, 2, 1, 5, 3, 4] //[0,1,2,4,5,3]
let resp = buildArray(nums)
console.log(resp)