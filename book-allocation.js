/*
You have N books, each with A[i] number of pages. M students need to be allocated contiguous books, with each student getting at least one book. Out of all the permutations, the goal is to find the permutation where the student with the most books allocated to him gets the minimum number of pages, out of all possible permutations.

Note: Return -1 if a valid assignment is not possible, and allotment should be in contiguous order (see the explanation for better understanding).

Example 1:

Input:

- N = 4
- A[] = {12,34,67,90}
- M = 2
Output:

113

Explanation: Allocation can be done in 
following ways:

- {12} and {34, 67, 90} Maximum Pages = 191
- {12, 34} and {67, 90} Maximum Pages = 157
- {12, 34, 67} and {90} Maximum Pages =113.

Therefore, the minimum of these cases is 113,<br>
which is selected as the output.

Expected Time Complexity: O(NlogN)

Expected Auxilliary Space: O(1)

Constraints:

1 <= N <= 10^5

1 <= A [ i ] <= 10^6

1 <= M <= 10^5

*/


/*

Naive Approach: The simplest approach to solve this problem is to find all permutations to distribute N books among M students, and return the minimum page allocation among them.

Efficient Approach: 

Another way to solve this problem is to use Binary Search, based on this idea:

Case 1: When no valid answer exists.

If the number of students is greater than the number of books (i.e, M > N), In this case at least 1 student will be left to which no book has been assigned.
Case 2: When a valid answer exists.

The maximum possible answer could be when there is only one student. So, all the book will be assigned to him and the result would be the sum of pages of all the books.
The minimum possible answer could be when number of student is equal to the number of book (i.e, M == N) , In this case all the students will get at most one book. So, the result would be the maximum number of pages among them (i.e, maximum(pages[])).
Hence, we can apply binary search in this given range and each time we can consider the mid value as the maximum limit of pages one can get. And check for the limit if answer is valid then update the limit accordingly.
Below is the approach to solve this problem using Binary Search:

Calculate the mid and check if mid number of pages can be assigned to students such that all students will get at least one book.
If yes, then update the result and check for the previous search space (end = mid-1)
Otherwise, check for the next search space (start = mid+1)

*/

function check(A, mid, M) {
    let totalStuds = M
    let currentSum = 0
    let remainingSum = mid
    let res = true;
    for (let i of A) {
        currentSum += i
        remainingSum -= currentSum
        if (currentSum > mid && totalStuds > 0) {
            break;
        }
        if (i < mid) {
            totalStuds--
        }
    }
    return res;
}

class Solution {
    static findPages(A, N, M) {
        if (M > N) return -1
        let max = Number.MIN_VALUE
        let sum = 0
        for (let i of A) {
            sum += i
            max = Math.max(max, i)
        }

        let left = 0, mid, right = max;
        while (left <= right) {
            mid = Math.floor((left + right) / 2)
            //check if mid pages can be assigned to M students
            let res = check(A, mid, M)
            // if yes then do end = mid-1
            if (res) {
                right = mid - 1
            } else {
                // else do start = mid+1
                left = mid + 1
            }


        }
        return mid
    }
}

// let A = [12, 34, 67, 90], N = 4, M = 3
let A = [1, 2, 3, 4, 5, 6], N = 6, M = 2
console.log(Solution.findPages(A, N, M))