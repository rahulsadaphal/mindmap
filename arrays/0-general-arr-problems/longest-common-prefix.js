// https://leetcode.com/problems/longest-common-prefix/description/

var longestCommonPrefix = function (strs) {
    let ans = ''
    let str0 = strs[0]
    for (let i = 0; i < str0.length; i++) {
        let includes = true
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][0] !== str0[i]) {
                includes = false;
                break;
            }else{
                strs[j] = strs[j].split("").splice(1).join("") 
                
            }
        }
        if(includes){
            ans += str0[i]
        }else{
            break;
        }
    }
   return ans;
};

let strs = ["flower", "flow", "flight"] //fl
// strs = ["dog","racecar","car"] // ""
// strs = ["cir","car"] // c
// strs = ["aa","ab"] //a
// strs = ['aa', 'aa'] // aa
// strs = ["c","acc","ccc"] //""
console.log(longestCommonPrefix(strs))