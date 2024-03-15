let str = 'abcabcbb' //abc
str = 'bbbbbb' //b
// str = 'pwwkew' //wke
// str = " "
// str = "au" //au
// str = "auc" //auc
// str = "dvdf" //vdf
// str = 'abba'
// str = 'abcdabc'

var lengthOfLongestSubstring = function (s) {
    let pre= '';
    let curString = []
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        let ind = curString.findIndex(el => el == s[i])
        if (ind !== -1) {
            pre = curString
            curString = []
        }
        curString.push(s[i])
        ans = Math.max(ans, curString.length)
    }
    return {ans, str: pre.length == 0 ? curString : pre}
};

const res = lengthOfLongestSubstring(str)
console.log(res)







