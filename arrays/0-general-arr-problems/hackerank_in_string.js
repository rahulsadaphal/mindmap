



function hackerrankInString(s) {
    let originalString = 'hackerrank';
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == originalString.charAt(count)) {
            count++
        }
        if (count == originalString.length) {
            return 'YES'
        }
    }
    return 'NO'
}

let s = 'haacckkerrannkk' // This contains a subsequence of all of the characters in the proper order. Answer YES
s = 'haacckkerannk' // This is missing the second 'r'. Answer NO.
s = 'hccaakkerrannkk' // There is no 'c' after the first occurrence of an 'a', so answer NO.

const res = hackerrankInString(s)
console.log(res)