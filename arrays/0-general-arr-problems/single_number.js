let nums = [2, 2, 1] //1
// nums = [4, 1, 2, 1, 2] //4
// nums = [1] //1


class Solution {
    static sn(nums) {
        const obj = {}
        for(let i of nums){
            obj[i] = obj[i] ? obj[i]+1 : 1
        }
        for(let k of Object.keys(obj)){
            if(obj[k] == 1){
                return k
            }
        }
    }
}

const res = Solution.sn(nums)
console.log(res)