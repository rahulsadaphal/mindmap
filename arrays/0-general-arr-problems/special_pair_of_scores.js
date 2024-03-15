

class Solution {
    inversionCount(arr, n) {
        let specialPairs = 0
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (arr[i] > arr[j]) {
                    specialPairs++
                }
            }
        }
        return specialPairs
    }
}

let arr = [8,4,2,1,5,3]
const resp = new Solution().inversionCount(arr, arr.length)
console.log(resp)