// class Solution {
//     maxElementFrequency(n, a) { 
//         if(n == 0) return 0;
//         let obj = {}
//         for(let i of a){
//             obj[i] = obj[i] ? obj[i]+1 : 1
//         }
//         let maxFreq = Number.MIN_VALUE
//         for(let key of Object.keys(obj)){
//             maxFreq = Math.max(obj[key], maxFreq)
//         }
//         return maxFreq
//     } 
// }

class Solution {
    maxElementFrequency(n, a) { 
        if(n == 0) return 0;
        let obj = {}
        for(let i of a){
            obj[i] = obj[i] ? obj[i]+1 : 1
        }
        let maxFreq = Number.MIN_VALUE
        for(let key of Object.keys(obj)){
            maxFreq = Math.max(obj[key], maxFreq)
        }
        return maxFreq
    } 
}

let arr = [1, 3, 2, 3, 3] //3
arr = [5, 5, 5, 5, 5, 5] //6
arr = [0]
arr = [1,1,2,2]
let resp = new Solution().maxElementFrequency(arr.length, arr)
console.log(resp)