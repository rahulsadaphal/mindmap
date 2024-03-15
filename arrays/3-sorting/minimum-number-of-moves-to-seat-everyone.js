// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/

var minMovesToSeat = function(seats, students) {
    seats.sort((a,b) =>a-b)
    students.sort((a,b) =>a-b)
    let count = 0
    for(let i = 0; i< seats.length; i++){
        let diff = Math.abs(students[i]-seats[i])
        count += diff
    }
    return count;
};
let seats = [3,1,5], students = [2,7,4] // 4
console.log(minMovesToSeat(seats, students))