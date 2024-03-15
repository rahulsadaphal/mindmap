class Solution {
    mergeSort(arr) {
        if (arr.length <= 1) return arr;
        let left = 0;
        let right = arr.length - 1
        let mid = Math.floor((left + right) / 2)

        let resp1 = this.mergeSort(arr.slice(left, mid + 1))
        let resp2 = this.mergeSort(arr.slice(mid + 1, arr.length))

        //merge two arrays

        let i = 0;
        let j = 0;
        let finalArr = []
        while (i < resp1.length && j < resp2.length) {
            if (resp1[i] <= resp2[j]) {
                finalArr.push(resp1[i])
                i++
            } else {
                finalArr.push(resp2[j])
                j++
            }
        }
        while (i < resp1.length) {
            finalArr.push(resp1[i])
            i++
        }
        while (j < resp2.length) {
            finalArr.push(resp2[j])
            j++
        }

        return finalArr

    }
}
let arr = [10, 5, 3, 7]
arr = [11,2,6,9,20]
// arr = []
let resp = new Solution().mergeSort(arr)
console.log(resp)