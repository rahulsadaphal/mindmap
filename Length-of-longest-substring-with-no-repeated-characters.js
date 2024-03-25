/*
Length of longest substring with no repeated characters.
Determine the maximum length of a substring in string s that does not contain any repeated characters.

Sample Input:
Heycoachsuper30
Sample Output: 11
Constraints:

0 <= s.length <= 5 * 104

s consists of English letters, digits, symbols and spaces.
*/



class Solution {
    longestUniqueSubsttr(str) {
        let maxLen = Number.MIN_VALUE
        let i = 0
        let map = new Map()
        while (i < str.length) {
            let check = map.get(str[i])
            if (check) {
                i = check + 1
                maxLen = Math.max(maxLen, map.size)
                map.clear()
            } else {
                map.set(str[i], i)
                i++
            }
        }
        maxLen = Math.max(maxLen, map.size)
        return maxLen
    }
}


let str = 'Heycoachsuper30' //11
str = "abc ab abcd"
console.log(new Solution().longestUniqueSubsttr(str))