// https://leetcode.com/problems/container-with-most-water/description/


/*
Use two pointer approach, one will point left height, second will point right height. Calculate the area by taking mininum value of heights * (rightIndex-leftIndex);
Move the left pointer towards right if left height is less than or equals to right height. Otherwise, vice versa.
Check for maximum area with each combinations.

Complexity
Time complexity:
O(n)

Space complexity:
O(1)
*/


// class Solution {
//     static maxArea(height) {
//         let finalArea = Number.MIN_VALUE;
//         for (let i = 0; i < height.length; i++) {
//             let start = i;
//             let end = -1;
//             for (let j = 0; j < height.length; j++) {
//                 if (height[i] <= height[j] && i !== j) {
//                     if (i < j) {
//                         end = Math.max(end, j)
//                     } else {
//                         end = Math.max(end, j)
//                         break
//                     }
//                 }
//             }
//             if (end !== -1) {
//                 let calc = Math.abs(start - end) * height[i]
//                 finalArea = Math.max(finalArea, calc)
//             }
//         }
//         return finalArea
//     }
// }




class Solution {
    static maxArea(height) {
        let len = height.length
        let finalArea = Number.MIN_VALUE;
        
        let left = 0
        let right = len-1
        while(left < right){
            let temp = Math.min(height[left], height[right]) * (right-left)
            finalArea = Math.max(finalArea, temp)
            if(height[left] <= height[right]){
                left++
            }else{
                right--
            }
        }
        return finalArea
    }
}




let height = [1, 5, 4, 3] // 6
height = [1, 8, 6, 2, 5, 4, 8, 3, 7] // 49
const res = Solution.maxArea(height)
console.log(res)