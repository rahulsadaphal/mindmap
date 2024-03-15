

var sortArrayByParity = function(nums) {
    let i = -1
    for(let j = 0; j<nums.length; j++){
        if(nums[j] % 2 == 0){
            i++
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }
    }
    return nums
};

let nums = [3,1,2,4]
let resp = sortArrayByParity(nums)
console.log(resp)