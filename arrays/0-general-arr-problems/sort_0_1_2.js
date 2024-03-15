

class Solution {
    static sortcolors(nums) {

        function swap(arr, a, b){
            let temp = arr[a]
            arr[a] = arr[b]
            arr[b] = temp
        }
        let start = 0
        let end = nums.length - 1
        while(start !== end){
            if(nums[start] == 2 && nums[end] == 1){
                swap(nums, start, end)
                end--
            }else if(nums[start] == 1 && nums[end] == 0){
                swap(nums, start, end)
                start++
            }else if(nums[start] == 1 && nums[end] == 2){
                end--
            }
            else if(nums[start] == 2 && nums[end] == 0){
                swap(nums, start, end)
                start++
                end--
            }
            else if(nums[start] == 0){
                start++
            }else if(nums[start] == nums[end]){
                start++
            }
        }
        return nums
}}




// class Solution {
//     static sortcolors(nums) {

//         function swap(arr, a, b) {
//             let temp = arr[a]
//             arr[a] = arr[b]
//             arr[b] = temp
//         }

//         for (let i = 0; i < nums.length - 1; i++) {
//             for (let j = i + 1; j < nums.length; j++) {
//                 if(nums[i] > nums[j]){
//                     swap(nums, i, j)
//                 }
//             }
//         }
//         return nums
//     }
// }



let nums = [2, 0, 2, 1, 1, 0]
// nums = [2, 0, 2, 1, 0, 1]
// nums = [2, 0, 1]
nums = [1,0,2]
const resp = Solution.sortcolors(nums)
console.log(resp)