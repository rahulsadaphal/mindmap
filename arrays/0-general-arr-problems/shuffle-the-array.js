



var shuffle = function (nums, n) {
    let ans = [];
    let i = 0;
    let j = n
    while(i < n && j < 2*n){
        ans.push(nums[i], nums[j])
        i++
        j++
    }
   return ans
};

let nums = [2,5,1,3,4,7], n = 3 //[2,3,5,4,1,7] 
let resp = shuffle(nums, n)
console.log(resp)