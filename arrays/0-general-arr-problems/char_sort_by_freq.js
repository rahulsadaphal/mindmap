class Solution {
    frequencySort(s) {
        const char = s
        const obj = {}

        let maxFreq = 0
        for (let c of char) {
            obj[c] = obj[c] ? obj[c] + 1 : 1
            maxFreq = obj[c] > maxFreq ? obj[c] : maxFreq
        }

        const arr = Object.entries(obj)
        arr.sort((a, b) => a[1] - b[1])
        function constr(k) {
            let str = ''
            for (let i = 0; i < obj[k]; i++) {
                str += k
            }
            return str
        }

        let finalStr = ''
        for (let i of arr) {
            let str = constr(i[0])
            finalStr += str
        }
        console.log(finalStr)

    }
}



let str = 'aaaaabbbcccc'
// str = 'baacdd'
// str = 'a'
// str = 'aaAAbB'
new Solution().frequencySort(str)