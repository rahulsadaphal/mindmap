

// class Solution {
//     sortBalls(nums) {
//         for(let i = 0; i<nums.length-1; i++){
//             for(let j = i+1; j<nums.length; j++){
//                 if(nums[i]>nums[j]){
//                     let temp = nums[i]
//                     nums[i] = nums[j]
//                     nums[j] = temp
//                 }
//             }
//         }
//     }
// }



class Solution {
    sortBalls(nums) {
        function partition(nums, low, high){
            let pivot = nums[high]
            let i = low-1
            for(let j = low; j<=high; j++){
               if(nums[j]<pivot){
                i +=1
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j]=temp
               } 
            }
            let temp = nums[i+1]
            nums[i+1] = pivot
            nums[high]= temp
            return i+1
        }

        function quick(nums, low, high){
            if (low < high) {
                let pivotPoint = partition(nums, low, high)
                quick(nums, low, pivotPoint - 1)
                quick(nums, pivotPoint + 1, high)
            }
        }

        quick(nums, 0, nums.length-1)
    }
}


let nums = [2,0,1,1,1]
let resp = new Solution().sortBalls(nums)
console.log(nums)
