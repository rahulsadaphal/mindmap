
// Given two sorted arrays nums1 and nums2 of sizes m and n respectively, 
// return the median of the two sorted arrays. You have to return an integer kind of value.
// The overall run time complexity should be O(log (m+n)).



class Solution {
    getMedian(ar1, ar2, n, m) {
        let finalArr = [...ar1, ...ar2]
        if(finalArr.length == 0) return 0
        finalArr.sort((a, b) => a - b)
        let len = finalArr.length;
        if (len % 2 !== 0) {
            //odd len
            let mid = (0 + (len - 1)) / 2
            return finalArr[mid]
        } else {
            //even len
            let mid1 = Math.floor((0 + len - 1) / 2)
            let mid2 = Math.floor((0 + len) / 2)
            return Math.floor((finalArr[mid1] + finalArr[mid2]) / 2)
        }
    }
}


let nums1 = [1, 3], nums2 = [2]
// nums1 = [1,2], nums2 = [3,4]
// nums1 = [], nums2 = []
console.log(new Solution().getMedian(nums1, nums2))