



class Solution {
    findans(nums) {
        let arr = nums;
        let n = arr.length;
        let resultMul = arr[0];
        let resultSum = arr[0]
        
        for (let i = 0; i < n; i++) {
            let tempMul = arr[i];
            let tempSum = arr[i]
            // traversing in current subarray
            for (let j = i + 1; j < n; j++) {
                // updating result every time
                // to keep an eye over the maximum product
                resultMul = Math.max(resultMul, tempMul);
                resultSum = Math.max(resultSum, tempSum)
                tempMul *= arr[j];
                tempSum += arr[j]
            }
            // updating the result for (n-1)th index.
            resultMul = Math.max(resultMul, tempMul);
            resultSum = Math.max(resultSum, tempSum);
        }
        if (resultSum > resultMul) return 1;
        if (resultSum < resultMul) return -1;
        if (resultSum == resultMul) return 0;
    }
}

let arr = [1, -2, -3, 0, 7, -8, -2];
arr = [9, 12, 18, 66, 94]
arr = []


let resp = new Solution().findans(arr)
console.log(resp)