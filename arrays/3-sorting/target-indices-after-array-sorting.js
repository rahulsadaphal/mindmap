

var targetIndices = function(nums, target) {
    let indices = []
    nums.sort((a,b) => a-b)
    for(let i = 0; i<nums.length; i++){
        if(nums[i] == target){
            indices.push(i)
        }
    }
    return indices
};

let nums = [1,2,5,2,3], target = 2;
nums = [1,2,5,2,3], target = 3
nums = [1,2,5,2,3], target = 5
let resp = targetIndices(nums, target)
console.log(resp)