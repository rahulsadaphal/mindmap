// https://leetcode.com/problems/find-target-indices-after-sorting-array/description/

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

nums = [1,2,5,2,3], target = 2
// Output: [1,2]