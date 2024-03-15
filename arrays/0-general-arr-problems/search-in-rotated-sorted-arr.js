


class Solution {
    searchRoated(nums, target) {
        let arr = nums
        let i = 0;
        let peakInd;
        while (i < arr.length - 1) {
            if (arr[i] > arr[i + 1]) {
                peakInd = i
                break
            } else {
                i++
            }
        }

        function rec(arr, low, high, target) {
            if (low > high) return -1
            let mid = Math.floor((low + high) / 2)
            if (target == arr[mid]) return mid
            let resp1 = rec(arr, low, mid - 1, target)
            let resp2 = rec(arr, mid + 1, high, target)
            return Math.max(resp1, resp2)
        }
        if (arr[peakInd] == target) return peakInd;
        let resp1 = rec(arr, 0, peakInd, target)
        let resp2 = rec(arr, peakInd + 1, arr.length - 1, target)
        return Math.max(resp1, resp2)
    }
}

let arr = [4, 5, 6, 7, 0, 1, 2], target = 2
console.log(new Solution().searchRoated(arr, target))