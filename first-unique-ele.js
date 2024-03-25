// return the sequentially first element which occured only once in an array


class Solution {
    firstUnique(ar) {
        // remove all duplicates first
        let temp = [...new Set(ar)]

        for (let i of temp) {
            let j = 0
            let tempInd = []
            while (j < ar.length) {
                if (ar[j] == i) {
                    tempInd.push(j)
                }
                j++
            }
            if (tempInd.length > 1) {
                tempInd.map((el, i) => {
                    if (i == 0) {
                        ar.splice(el, 1)
                    } else {
                        ar.splice(el - i, 1)
                    }
                })
            }
        }
        if (ar.length == 0) {
            return -1
        } else {
            return ar[0]
        }
    }
}

let ar = [9, 6, 7, 6] //9
// ar = [7, 6, 1, 6, 1] //7
// ar = [1, 1, 7, 6, 6, 1] // 7
// ar = [1, 1, 1, 2, 2] // -1
console.log(new Solution().firstUnique(ar))