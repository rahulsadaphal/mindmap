// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

var smallerNumbersThanCurrent = function(nums) {
    // nums.sort((a,b) => a-b)
    let ans = []
    for(let i =0; i<nums.length; i++){
        let cont = 0
        for(let j=0; j<nums.length; j++){
            if(i !== j && nums[i] > nums[j]){
                cont++
            }
        }
        ans.push(cont)
    }
    return ans
}



let nums = [8,1,2,2,3] // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent(nums))