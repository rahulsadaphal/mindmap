
// function check(str, target) {
//     let tempStr = str.split("")
//     let res = true
//     for (let i of target) {
//         if (tempStr.includes(i)) {
//             tempStr.splice(tempStr.findIndex(el => el == i), 1)
//         } else {
//             res = false
//         }
//     }
//     return res
// }


// function rec(s, t) {
//     let c = check(s, t)

//     if (!c) return false;

//     if (s.length == 1) return s;

//     s = s.split("")
//     let n = s.length;

//     let resp1, resp2;
//     if (s.length == 2) {
//         resp1 = rec(s[0], t)
//         resp2 = rec(s[1], t)
//     } else {
//         resp1 = rec(s.slice(0, n - 1).join(""), t)
//         resp2 = rec(s.slice(1, n).join(""), t)
//     }
//     // console.log('str - ', s.join(""), 'resp1 - ', resp1, 'resp2 - ', resp2)

//     if (resp1 == false && resp2 == false) {
//         return s.join("")
//     } else if (typeof (resp1) == 'string' && typeof (resp2) == 'boolean') {
//         return resp1;
//     } else if (typeof (resp1) == 'boolean' && typeof (resp2) == 'string') {
//         return resp2
//     } else if (typeof (resp1) == 'string' && typeof (resp2) == 'string') {
//         if (resp1.length <= resp2.length) {
//             return resp1
//         } else {
//             return resp2
//         }
//     }

// }

// var minWindow = function (s, t) {
// if (s.length < t.length) return ""
// if(s == t) return s;
// if(s.length == 1 && t.length == 1 && s !== t) return "" 
//     let res = rec(s, t)
//     return res
// };


// function check(str, target) {
//     let tempStr = [...str];
//     let res = true
//     for (let i of target) {
//         if (tempStr.includes(i)) {
//             tempStr.splice(tempStr.findIndex(el => el == i), 1)
//         } else {
//             // res = false;
//             return false;
//         }
//     }
//     return res
// }



// var rec = function (s, t) {
//     let finalStr = ''
//     let finalStrLen = Number.MAX_VALUE
//     s = s.split("")
//     let len = s.length
//     let start = 0, i = 0, j = len - 1, end = len - 1

//     while (i < len) {
//         if (i < len) {
//             let slice = s.slice(start, i + 1)
//             let c = check(slice, t)
//             if (!c) {
//                 i++
//             } else {
//                 if (slice.length < finalStrLen) {
//                     finalStr = slice.join("");
//                     finalStrLen = slice.length
//                 }
//                 start++
//                 i = start
//             }
//         }

//         // if (j >= 0) {
//         //     let slice = s.slice(j, end + 1)
//         //     let c = check(slice, t)
//         //     if (!c) {
//         //         j--
//         //     } else {
//         //         if (slice.length < finalStrLen) {
//         //             finalStr = slice.join("");
//         //             finalStrLen = slice.length
//         //         }
//         //         end--
//         //         j = end
//         //     }
//         // }
//     }
//     return finalStr
// };


// var rec = function (s, t) {
//     let finalStr = ''
//     let finalStrLen = Number.MAX_VALUE
//     s = s.split("")
//     let len = s.length
//     let start = 0, i = 0;

//     while (i < len) {

//             let slice = s.slice(start, i + 1)
//             let c = check(slice, t)
//             if (!c) {
//                 i++
//             } else {
//                 if (slice.length < finalStrLen) {
//                     finalStr = slice.join("");
//                     finalStrLen = slice.length
//                 }
//                 start++
//             }



//     }
//     return finalStr
// };

// function check(str, target) {
//     let tempArr = [...str]
//     tempArr.sort((a, b) => a.localeCompare(b))
//     target = target.split("")
//     target.sort((a, b) => a.localeCompare(b))
//     let i = 0, j = 0
//     while (i < tempArr.length) {
//         if (tempArr[i] == target[j]) {
//             i++
//             j++
//         } else {
//             i++
//         }
//     }
//     return j == target.length ? true : false
// }

// // var minWindow = function (s, t) {
// //     let finalStr = ''
// //     let finalStrLen = Number.MAX_VALUE
// //     s = s.split("")
// //     let len = s.length
// //     let start = 0, i = 0;

// //     while (i < len) {
// //             let slice = s.slice(start, i + 1)
// //             let c = check(slice, t)
// //             if (!c) {
// //                 i++
// //             } else {
// //                 if (slice.length < finalStrLen) {
// //                     finalStr = slice.join("");
// //                     finalStrLen = slice.length
// //                 }
// //                 start++
// //             }
// //     }
// //     return finalStr
// // };


// var minWindow = function (s, t) {
//     let obj = {}
//     for (let i of t) {
//         obj[i] = obj[i] ? obj[i] + 1 : 1
//     }

//     let tempObj = { ...obj }

//     let finalStr = ""
//     let finalStrLen = Number.MAX_VALUE
//     s = s.split("")
//     let len = s.length
//     let start = 0, i = 0;

//     while (i < len) {
//         if (obj[s[i]]) {
//             obj[s[i]] = obj[s[i]] - 1
//             if (obj[s[i]] <= 0) {
//                 delete obj[s[i]]
//             }

//             if (Object.keys(obj).length == 0) {
//                 //means all keys are visited
//                 let slice = s.slice(start, i + 1)
//                 if (slice.length < finalStrLen) {
//                     finalStr = slice.join("");
//                     finalStrLen = slice.length
//                 }
//                 start++
//                 i = start;
//                 obj = {...tempObj}
//             } else {
//                 i++
//             }
//         } else {
//             i++
//         }
//     }
//     return finalStr
// };




// var minWindow = function (s, t) {
//     let map = new Map()
//     for (let i of t) {
//         let get = map.get(i)
//         if (get) {
//             map.set(i, get + 1)
//         } else {
//             map.set(i, 1)
//         }
//     }

//     let tempMap = new Map(map)

//     let finalStr = ""
//     let finalStrLen = Number.MAX_VALUE
//     s = s.split("")
//     let len = s.length
//     let start = 0, i = 0;

//     while (i < len) {
//         if (map.get(s[i])) {
//             map.set(s[i], map.get(s[i]) - 1)
//             if (map.get(s[i]) <= 0) {
//                 map.delete(s[i])
//             }

//             if (map.size == 0) {
//                 //means all keys are visited
//                 let slice = s.slice(start, i + 1)
//                 if (slice.length < finalStrLen) {
//                     finalStr = slice.join("");
//                     finalStrLen = slice.length
//                 }
//                 start++
//                 i = start;
//                 map = new Map(tempMap)
//             } else {
//                 i++
//             }
//         } else {
//             i++
//         }
//     }
//     return finalStr
// };



/*

Intuition
The main problem is finding the smallest substring in s that contains all the characters in t. Use the sliding window concept to solve this problem.

Approach
Character Frequency t: We start by counting the frequency of each character in t using a hashmap.

Sliding Window Expansion: We use two pointers (left and right) to represent our current window in s. Initially, our window is empty. We expand our window by moving end to the right, thereby including more characters of s into our window.

Tracking Character Frequencies in the Window: As we include more characters in our window, we use another hashmap to keep track of the frequency of each character within the window.

Valid Window Check: Our goal is to adjust the window to include at least as many of each character as are found in t. Once our window includes enough of each required character, we have a valid window.

Window Minimization: reduce its size from the left, maintaining validity (is it still contains all characters from t) while seeking the minimum length. We do this by incrementally moving start to the right, reducing the window size until it no longer meets the criteria.

Result Update and Repeat: Each time a valid minimum window is found, we compare its size to the smallest found so far and update our result accordingly. We continue this process until end has reached the end of s.

Termination: If we find a valid window, we return it. If no such window exists, we return an empty string.

Complexity
Time complexity:
O(n)O(n)O(n)

Space complexity:
O(n)O(n)O(n)

https://leetcode.com/problems/minimum-window-substring/solutions/4673781/easy-sliding-window-solution-explained/

*/


var minWindow = function(s, t) {
    if (s.length < t.length) return ""
    const tCount = {}
    for (let char of t){
        tCount[char] = (tCount[char] || 0) + 1
    }
    let needCount = Object.keys(tCount).length
    let haveCount = 0
    let left = 0
    let idxResultWindow = [0, Infinity] // Store the start and end of the minimum window
    const windowCount = {}

    for (let right = 0 ; right < s.length ; right++){
        const char = s[right]
        windowCount[char] = (windowCount[char] || 0) + 1

        if (windowCount[char] === tCount[char]){
            haveCount++
        }

        // when the current window satisfy the needs, try to shrink the window
        while (haveCount === needCount){
            // Update result if this window is smaller than the previous one
            if (right - left < idxResultWindow[1] - idxResultWindow[0]){
                idxResultWindow = [left, right]
            }

            // slide the left window pointer to minimize the solution
            windowCount[s[left]]--
            if (windowCount[s[left]] < tCount[s[left]]){
                haveCount--
            }
            left++
        }
    }
    console.log(idxResultWindow)
    return idxResultWindow[1] === Infinity ? "" : s.slice(idxResultWindow[0], idxResultWindow[1] + 1)
};







// let s = 'ADOBECODEBANC', t = 'ABC' //BANC
s = 'bba', t = 'abb' //ba
// s = 'ZXACBD', t = 'AB' // ACB
// s = 'ab', t = 'a' //a
// s = 'cabwefgewcwaefgcf', t = 'cae' //cwae
// s='cwae', t='cae'
// s = 'a', t = 'aa' //""
// s = "acaabacababcbcacbbccbaccaaacacabbbcaccabccabbca", t = "bbaacbacbbccbcaabbacbacac"
// s = "cgklivwehljxrdzpfdqsapogwvjtvbzahjnsejwnuhmomlfsrvmrnczjzjevkdvroiluthhpqtffhlzyglrvorgnalk", t = "mqfff"
// s = "ezsevejszgvxqqggbwkxpwzoyrbaslnxmfdjmmentzllptsspeshatvbkwbcjozwwcfirjxmiixadrsvwmcyfzzpxauhptdlyivrssdadacisxdojhopgogeoalfwoswypnqiqtnqxvkubaeiptpdzvtaizywtuwjhptxkgnhdaceagppbeuabocjpahiudrdskacsqmwqocqurivxcxyqcjfcqqzwheqsfvkxhinvlfrenmcslcinoqsggtcpxtjcowbveosrwjyjvcbigmwueobmjdbgynlojmjpbbjzmhkjjosraomgepsnuvvtkghtttlwwuxjdhsovmfvctdiixxdvtyfzhbuamszipklxezsrgqtavcitzloulvwtwqvklwscgfznguenmzphdxcdlqxwotrkmnxzjrbsxdffxlslkhsohxtupsqdokqaxnzieccdfhjesdpfnktuhoqwgicussurhvalaerfmakgfznslioswerdntxfnuxurzhrfyzrajagkpywypqutjzicxqrtplkqtevtdpuoraagayeppblyavdzluscifsblowqdqeuqectdjkukxumtzogwijenbhapdquuwqmbthgcscmpyaiyorwxaambjntmfnicexfzenbyppoppyngpjdplrtugojmbtqhsvixkjxbylqqmgwbpbtdsozzcinfedpwaxvkhtnhgdxsjtwburephdojodouifqkdowmjjtpmrkwmizjzdygioryrhsznllqbhekqxbeqlcdtbougmcpavptdkuqvfiymmieljkcxnhsovpvjrmjnbcqlwiidsirgqvrcfvbuctlzigicutrxxjlvrvylerrwmkaugbqkxbkhjujdqcdplolejlpndimrtmnzoelnfvupsgukixzwlkaxysmbayuvliubogotdkkxqhhbejxsvxrtpdwsetnrb", t = "ksrsimxsxxjegkkpj"
console.log(minWindow(s, t))
// console.log(check('BANC', "ABC"))