nums = [1, 2, 3, 3, 3, 2, 2, 5]
nums = [1, 2, 3, 4, 5]
nums = [7, 6, 5, 8, 9]

class Solution {
    countFreq(arr, n) {
        let nums = arr;
        let maxFreq = 0
        const ob = {}
        let frq
        for (let i of nums) {
            frq = ob[i] ? ob[i] + 1 : 1
            ob[i] = frq
            maxFreq = Math.max(maxFreq, frq)
        }
        // console.log(ob, maxFreq)
        let finalSum = 0
        for (let key of Object.keys(ob)) {
            if (ob[key] == maxFreq) {
                finalSum += Number(key)
            }
        }
        // console.log(finalSum)
        return finalSum
    }
}

