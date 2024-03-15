

var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length-1
    
    

    function rec(nums, low, high){
        if(low>=high && (nums[low] == nums[low+1] || nums[low] == nums[low-1])){
            return -1
        }else if(low>=high && (nums[low] !== nums[low+1] || nums[low] !== nums[low-1])){
            return nums[low]
        }

        let mid = Math.floor((low+high)/2)
        let resp1 = rec(nums, low, mid)
        let resp2 = rec(nums, mid+1, high)
        return Math.max(resp1, resp2)
    }

    let resp = rec(nums, low, high)
    return resp
};

let nums = [1,1,2,3,3,4,4,8,8]
nums = [3,3,7,7,10,11,11]
let resp = singleNonDuplicate(nums)
console.log(resp)