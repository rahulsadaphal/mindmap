class Solution {
    reverseArray(n, a) {
        let res = []
        res.push(...a)
        res.push(...a.reverse())
        return res
    }
}

let arr = [-1, 0, 1]
console.log(new Solution().reverseArray(arr.length, arr))