/*

The school cafeteria offers circular and square sandwiches at lunch break, represented by numbers 0 and 1, respectively. All students stand in a queue, expressing their preference for either square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students, and these sandwiches are placed in a stack. The lunch process unfolds as follows:

If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue. Otherwise, they will leave the sandwich on the top of the stack and go to the end of the queue. This process continues until none of the students in the queue want to take the top sandwich, rendering them unable to eat.

You are given two integer arrays, students and sandwiches, where sandwiches[i] represents the type (0 or 1) of the i​​​​​​th sandwich in the stack, and students[j] represents the preference (0 or 1) of the j​​​​​​th student in the initial queue. Your task is to return the number of students who are unable to eat.

Input:

students: A list of integers representing the preferences of students (0 or 1).
sandwiches: A list of integers representing the types of sandwiches in the stack (0 or 1).
Output:

An integer representing the number of students unable to eat.

Examples:
Example:1

students = [1, 1, 1, 0, 0, 1]
sandwiches = [1, 0, 0, 0, 1, 1]
Output:
3

Example2:

students = [1, 1, 0, 0] sandwiches = [0, 1, 0, 1]

Output:

0

Constraints:

1 <= students.length, sandwiches.length <= 100
students.length == sandwiches.length
sandwiches[i] is 0 or 1.
students[i] is 0 or 1.


*/




class Solution {
    countStudents(students, sandwiches) {
        let currentState = JSON.stringify(students)
        let nextState = null
        while (currentState !== nextState) {
            let count = 0
            while (count < students.length) {
                if (students[0] == sandwiches[0]) {
                    // remove student and sandwiches
                    students.shift()
                    sandwiches.shift()
                    count++
                } else {
                    let stud = students.shift()
                    students.push(stud)
                    count++
                }
            }
            currentState = nextState
            nextState = JSON.stringify(students)

        }
        return students.length
    }
}

let students = [1, 1, 1, 0, 0, 1], sandwiches = [1, 0, 0, 0, 1, 1] // 3
students = [1, 1, 0, 0], sandwiches = [0, 1, 0, 1] // 0

console.log(new Solution().countStudents(students, sandwiches))