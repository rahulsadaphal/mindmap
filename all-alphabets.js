/*

Write a program that takes lowercase string str as input and checks if it contains all 26 alphabets at least once. Given a string str, return true if str contains all 26 alphabets, or false otherwise.

Input:
The first line contains a lowercase string str.

Output:
Return a boolean value true or false.

Constraints:
1 <= str.length <= 10^4
str consists of lowercase English letters.
Example 1
Input:

thequickbrownfoxjumpsoverthelazydog
Output

true
Explanation:
str contains at least one of every letter of the English alphabet.

Example 2
Input:
heycoach

Output
false

Explanation:
str does not contain at least one of every letter of the English alphabet.


*/



class Solution {
    allAlphabetsOrNot(str) {
        let obj = {}
        "thequickbrownfoxjumpsoverthelazydog".split("").map(ch => {
            obj[ch] = 0
        })

        for (let ch of str) {
            obj[ch] = obj[ch] + 1
        }

        for (let ch of Object.keys(obj)) {
            if (obj[ch] == 0) {
                console.log(false)
                return
            }
        }
        
        console.log(true)
        return
    }
}


let str = "thequickbrownfoxjumpsoverthelazydog" //true
str = "heycoach" // false

console.log(new Solution().allAlphabetsOrNot(str))