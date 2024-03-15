


var subsets = function(nums) {
    let res = [[]], appendarr= []
    
    for(let num of nums){
        appendarr = []
        for(let entry of res){
            appendarr.push([...entry, num])
        }
        
        res.push(...appendarr)
    }
    
    return res
    
};

let nums = [1, 2, 3]
let resp = subsets(nums)
console.log(resp)