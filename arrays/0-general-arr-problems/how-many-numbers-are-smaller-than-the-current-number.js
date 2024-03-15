

var smallerNumbersThanCurrent = function(nums) {
    let finalArr = new Array(nums)
    
    for(let i = 0; i<nums.length; i++){
        let count = 0;
        for(let j = 0 ; j <nums.length; j++){
            if(i !== j && nums[i] > nums[j]){
                count++
            }
        }
        finalArr[i] = count
    }
    return finalArr;
};

let nums = [8,3,2,2,1]
nums = [6,5,4,8]
nums = [7,7,7,7]
let resp = smallerNumbersThanCurrent(nums)
console.log(resp)