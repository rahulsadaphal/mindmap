
/*

Swap to Max
You are given two arrays a1,a2,…,an and b1,b2,…,bn. In one operation, you can choose any integer i from 1 to n and swap the numbers a (ith) and b (ith).

Determine whether, after using any (possibly zero) number of operations, the following two conditions can be satisfied simultaneously:
1.  a(nth) = max(a1,a2,…,an)
2. b(nth) = max(b1,b2,…,bn)
Here max(c1,c2,…,ck) denotes the maximum number among c1,c2,…,ck. For example, max(3,5,4)=5, max(1,7,7)=7, max(6,2)=6

Input Format:

1. The first line contains an integer 'n' denoting the length of arrays.
2. The second line contains the elements of array 'a'.
3. The third line contains the elements of array 'b'.
Output Format:
If the above conditions can be met, print "YES" else print "NO".

Sample Input:


3

7 9 7

7 6 9

Sample Output:

"YES"
*/

class Solution {
    solve(n, a, b) {
        //initial check
        let max1 = Math.max(...a)
        let max2 = Math.max(...b)
        if (max1 == a[n - 1] && max2 == b[n - 1]) {
            // return "YES"
            console.log("YES")
            return
        }


        for (let i = 1; i < n; i++) {
            let temp = a[i]
            a[i] = b[i]
            b[i] = temp
            let max1 = Math.max(...a)
            let max2 = Math.max(...b)
            if (max1 == a[n - 1] && max2 == b[n - 1]) {
                // return "YES"
                console.log("YES")
                return
            }
        }

        // return "NO"
        console.log("NO")
        return
    }
}


// class Solution {
//     solve(n, a, b) {
//         //initial check
//         let max1 = Math.max(...a)
//         let max2 = Math.max(...b)
//         if (max1 == a[n - 1] && max2 == b[n - 1]) {
//             // return "YES"
//             console.log("YES")
//             return
//         }


//         for (let i = 1; i < n; i++) {
//             let temp1 = [...a]
//             let temp2 = [...b]
//             let temp = temp1[i]
//             temp1[i] = temp2[i]
//             temp2[i] = temp
//             let max1 = Math.max(...temp1)
//             let max2 = Math.max(...temp2)
//             if (max1 == temp1[n - 1] && max2 == temp2[n - 1]) {
//                 // return "YES"
//                 console.log("YES")
//                 return
//             }
//         }

//         // return "NO"
//         console.log("NO")
//         return
//     }
// }

let a = [7, 9, 7], b = [7, 6, 9]
// a= [1,3,2], b=[1,2,0]
a=[1], b=[1]
console.log(new Solution().solve(a.length, a, b))