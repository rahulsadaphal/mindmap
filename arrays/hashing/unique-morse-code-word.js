// https://leetcode.com/problems/unique-morse-code-words/description/

var uniqueMorseRepresentations = function (words) {
    let morseCodes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    let alphabets = { "a": 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25 }
    let finalArr = []
    for (let i of words) {
        let code = ''
        for (let char of i) {
            code += morseCodes[alphabets[char]]
        }
        finalArr.push(code)
    }
    return [...new Set(finalArr)].length
};

let words = ["gin", "zen", "gig", "msg"] // 2
// words = ["a"] // 1
console.log(uniqueMorseRepresentations(words))