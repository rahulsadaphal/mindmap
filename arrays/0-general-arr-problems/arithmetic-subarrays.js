

var checkArithmeticSubarrays = function(nums, l, r) {
    let finalarr = new Array(l.length)
    finalarr.fill(true)
    for(let i = 0; i<l.length; i++){
        let subarr = [...nums.slice(l[i], r[i]+1)]
        // console.log(subarr)
        subarr.sort((a,b) => b-a);
        let diff = subarr[0] - subarr[1]
        for(let k = 1; k<subarr.length-1; k++){
            if(subarr[k] - subarr[k+1] !== diff){
                finalarr[i] = false
            }
        }

    }
    return finalarr
};

let nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5] //[true,false,true]
nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10] //[false,true,false,false,true,true]

let resp = checkArithmeticSubarrays(nums, l ,r)
console.log(resp)