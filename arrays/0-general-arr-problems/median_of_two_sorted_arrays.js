


class Solution {
    getMedian(ar1, ar2, n, m) {
        const finalArr = []

        let i = 0
        let j = 0;
        while (i < ar1.length && j < ar2.length) {
            if (ar1[i] <= ar2[j]) {
                finalArr.push(ar1[i])
                i++
            } else {
                finalArr.push(ar2[j])
                j++
            }
        }
        if (i < ar1.length) {
            finalArr.push(...ar1.slice(i, ar1.length))
        }
        if (j < ar2.length) {
            finalArr.push(...ar2.slice(j, ar2.length))
        }
    
        let med;
        let len = finalArr.length
        if (len % 2 == 0) {
            med = Math.floor((finalArr[(len / 2) - 1] + finalArr[(len / 2)]) / 2)
        } else {
            med = finalArr[((len + 1) / 2) - 1]
        }
        return med
    

    }
}

const ar1 = [1, 5, 9]
const ar2 = [2, 3, 6, 7]
const resp = new Solution().getMedian(ar1, ar2)
console.log(resp)