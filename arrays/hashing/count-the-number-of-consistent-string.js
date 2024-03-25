// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

var countConsistentStrings = function(allowed, words) {
    let finalCount = words.length;
    for(let i of words){
        for(let j of i){
            if (!allowed.includes(j)){
                finalCount -- ;
                break;
            }
        }
    }
    return finalCount
};

let allowed = "ab", words = ["ad","bd","aaab","baa","badab"] // 2
allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"] // 7
allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"] // 4
console.log(countConsistentStrings(allowed, words))