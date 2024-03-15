function printSubStr(str,low,high)
{
        console.log(str.substring(low, high + 1));
}

// there are 2 approaches
// 1. recursion
// 2. dynamic programming

// Dynamic programming entails breaking the problem down into smaller sub-problems and saving the solutions in a table for later use, as opposed to recursion, which involves breaking the problem down into smaller sub-problems and solving them recursively.
    
// This function prints the longest
// palindrome substring of str[].
// It also returns the length of the
// longest palindrome
function longestPalindrome(str)
{
        // Get length of input string
        let n = str.length;

        // table[i][j] will be false if
        // substring str[i..j] is not palindrome.
        // Else table[i][j] will be true
        let table = new Array(n);
        for(let i = 0; i < n; i++)
        {
            table[i] = new Array(n);
        }

        // All substrings of length 1 are palindromes
        let maxLength = 1;
        for (let i = 0; i < n; ++i)
            table[i][i] = true;

        // console.log(table)

        // Check for sub-string of length 2.
        let start = 0;
        for (let i = 0; i < n - 1; ++i) 
        {
            if (str[i] == str[i + 1])
            {
                table[i][i + 1] = true;
                start = i;
                maxLength = 2;
            }
        }

        // Check for lengths greater than 2.
        // k is length of substring
        for (let k = 3; k <= n; ++k) {

            // Fix the starting index
            for (let i = 0; i < n - k + 1; ++i) 
            {
            
                // Get the ending index of substring from
                // starting index i and length k
                let j = i + k - 1;

                // Checking for sub-string from ith index to
                // jth index if str.charAt(i+1) to
                // str.charAt(j-1) is a palindrome
                if (table[i + 1][j - 1]
                    && str[i] == str[j]) {
                    table[i][j] = true;

                    if (k > maxLength) {
                        start = i;
                        maxLength = k;
                    }
                }
            }
        }
        // console.log("Longest palindrome substring is; ");
        // printSubStr(str, start,
        //             start + maxLength - 1);

        // Return length of LPS
        // return maxLength;
        return str.substring(start, start + maxLength-1+1)
}





let str = 'babad'
// str = 'cbba'
// str = 'ac'
// str = 'aaaaa'
str = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
const resp = longestPalindrome(str)
console.log(resp)








// var longestPalindrome = function(s) {
//     let split = s.split("")
//     if(s == [...split].reverse().join("")) return s;

//     const left = longestPalindrome(split.slice(1).join(""))
//     const right = longestPalindrome(split.slice(0, split.length-1).join(""))

//     if(left.length > right.length){
//         return left
//     }else{
//         return right
//     }
// }













// var longestPalindrome = function(s) {
//     let cnt = 0;
//     let finalArr = []
//     let temp = []
//     let len = 0;
//     while(cnt < s.length){
//         temp = []
//         for(let i = cnt; i < s.length; i++){
//             temp.push(s[i])
//             let newArr = [...temp]
//             if(temp.toString() == newArr.reverse().toString()){
//                 if(temp.length > len){
//                     finalArr = [...temp]
//                 }
//                 len = Math.max(len, temp.length);
               
                
//             }
//         }
//         cnt++
//     }
//     // return {len, finalArr};
//     let fStr = ''
//      finalArr.map(s => {fStr += s})
//      return fStr
// };

// let str = 'babad'
// // str = 'cbbd'
// // str = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
// let resp = longestPalindrome(str)
// console.log(resp)





















// var longestPalindrome = function(s) {
//     let cnt = 0;
//     let finalArr = []
//     let temp = []
//     let len = 0;
//     while(cnt < s.length){
//         temp = []
//         for(let i = cnt; i < s.length; i++){
//             temp.push(s[i])
//             let newArr = [...temp]
//             if(temp.toString() == newArr.reverse().toString()){
//                 if(temp.length > len){
//                     finalArr = [...temp]
//                 }
//                 len = Math.max(len, temp.length);
               
                
//             }
//         }
//         cnt++
//     }
//     // return {len, finalArr};
//     let fStr = ''
//      finalArr.map(s => {fStr += s})
//      return fStr
// };

// let str = 'babad'
// // str = 'cbbd'
// // str = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
// let resp = longestPalindrome(str)
// console.log(resp)