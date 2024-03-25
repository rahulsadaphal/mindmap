/*
There are 'n' fruits lying in a row on a long table. Each of these fruits is either a 'mango' denoted with the letter 'M' or a 'pineapple' denoted by the letter 'P'. There is at least one of each on the table.

You and your friend want to divide the fruits on the table: you will take a prefix of this row (several leftmost items), and the friend will take the rest. However, there are several restrictions:

1. Each person should have at least one item.
2. The number of your mangoes should differ from the number of your friend's mangoes.
3. The number of your pineapples should differ from the number of your friend's pineapples.
Find the lowest prefix selecting which division goes with these restrictions and if there is no answer print -1.

Input1:-

The first line contains one integer n. The number of fruits on the table.
The second line contains a string of length n consisting of letters 'M' and 'P'. 
Output1:-
Return the lowest possible integer 'ans' such that, if you take 'ans' number of leftmost items and your friend takes the remaining (n−ans) fruits, each of you and your friend get at least one fruit, your number of mangoes is different from your friend's, and your number of pineapples is different from your friend's. If there are no possible answers, return the number −1.

Sample Input:

3

PMP

Sample output:
1

Sample Input 2:-

4

PMPP

Sample Output 2:

1

(Note that in output 2, the number 2 also satisfies the conditions but it is not the lowest possible so the answer is one.)

Constraints:

2<=n<=200 .

*/



class Solution {
    solve(s, n) {
        if (n == 1) return -1
        if (n == 2 && s[0] !== s[1]) return 1; //both fruits different
        if (s == s.split("").reverse().join("")) return -1; //both fruits same
        s = s.split("")
        for (let i = 0; i < n - 1; i++) {
            let u1 = s.slice(0, i + 1)
            let u2 = s.slice(i + 1, n)

            let u1Mangoes = u1.filter(el => el == 'M').length
            let u1Pines = u1.filter(el => el == 'P').length

            let u2Mangoes = u2.filter(el => el == 'M').length
            let u2Pines = u2.filter(el => el == 'P').length

            if (u1Mangoes !== u2Mangoes && u1Pines !== u2Pines) return i+1

        }
        return -1

    }
}

let s = 'p' //-1
s = 'pm' // 1
s = 'pp'
s = 'ppp'
s = 'MMP' //
s = 'MMPP'
console.log(new Solution().solve(s, s.length))