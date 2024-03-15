

var removeElement = function(nums, val) {
    let count = 0
    for(let i = 0; i<nums.length; i++){
        if(nums[i] == val){
            count++
            nums[i] = Number.NEGATIVE_INFINITY
        }
    }
    nums.sort((a,b) => b-a)
    return nums.length - count
};

let nums = [3,2,2,3], val = 3
nums = [0,1,2,2,3,0,4,2], val = 2
let resp = removeElement(nums, val)
console.log(resp, nums)