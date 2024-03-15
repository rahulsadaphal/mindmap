// https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/




// class Solution {
//     minJumps(nums) {
//         function rec(nums, i) {
//             //console.log('nums - ', nums, 'i - ', i)
//             if (i >= nums.length - 1) return 1

//             let ans = Number.POSITIVE_INFINITY
//             let valAtI = nums[i]
//             let k = i + 1
//             while (valAtI !== 0) {
//                 let res = rec(nums, k)
//                 ans = Math.min(res, ans)
//                 k++
//                 valAtI--
//             }
//             return ans + 1
//         }

//         let res = rec(nums, 0) - 1
//         return res
//     }
// }


class Solution {
    minJumps(nums) {
        function rec(arr, i) {
            //base condition
            if (i >= arr.length - 1) {
                //means we reached to the end
                return 1;
            }

            let minVal = Number.MAX_VALUE;
            //decompose
            let elementAti = arr[i]
            let ctr = 1;
            while (elementAti !== 0) {
                let resp = rec(arr, i + ctr)
                minVal = Math.min(minVal, resp)
                ctr++
                elementAti--
            }
            return minVal + 1
        }
        let resp = rec(nums, 0)
        return resp-1
    }
}


let nums = [2, 3, 1, 1, 4]
nums = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

let res = new Solution().minJumps(nums)
console.log('final - ', res)