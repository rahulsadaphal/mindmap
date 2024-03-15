

var search = function (nums, target) {

    let low = 0
    let high = nums.length - 1


    function rec(nums, low, high, target) {
        if(low > high) return -1;
        let mid = Math.floor((low + high) / 2)
        if(target == nums[mid]){
            return mid;
        }
        if(target < nums[mid]){
            return rec(nums, low, mid-1, target)
        }else{
            return rec(nums, mid+1, high, target)
        }
    }

    let resp = rec(nums, low, high, target)
    return resp
};

let nums = [-1, 0, 3, 5, 9, 12], target = 9
nums = [-1,0,3,5,9,12], target = 2
let resp = search(nums, target)
console.log(resp)