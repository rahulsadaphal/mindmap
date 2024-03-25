// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

var firstPalindrome = function(words) {
    for(let i of words){
        if(i == i.split("").reverse().join("")){
            return i
        }
    }
    return ""
};

let words = ["abc","car","ada","racecar","cool"] // "ada"
words = ["notapalindrome","racecar"] // "racecar"
words = ["def","ghi"] // ""
console.log(firstPalindrome(words))