// https://leetcode.com/problems/pancake-sorting/solutions/817960/javascript-explanation/

/*
Main Idea is to find position of max value and reverse array up to max value including, max value is first. Then reverse whole array, max value is last. Get next lower number and do same.
[3,2,4,1] max value is length of array = 4;
index of 4 is 2 (position 3). 3 is first value in result array arr[3];
Reverse up to including 4, [4,2,3,1], now 4 is first.
We need to bring 4 to the end and leave 4 alone;
Reverse whole array [1,3,2,4]. arr[3,4]
Next number will be 3. Same again [3,1,2,4], [2,1,3,4]. arr[3,4,2,3]
Next 2. [1,2,3,4]. arr [3,4,2,3,2]
*/

var pancakeSort = function (arr) {
    let len = arr.length
    let reducer = 0
    let res = []

    //this loop decides how many times we have to perform the operations over an array
    for (let i = 0; i < len - 1; i++) {
        //get max element and inex from array
        let max = Number.MIN_VALUE
        let maxIndex;
        arr.slice(0, len - reducer).map((el, i) => {
            if (el > max) {
                max = el
                maxIndex = i
            }
        })
        //reverse array including max element
        arr = [...arr.slice(0, maxIndex + 1).reverse(), ...arr.slice(maxIndex + 1, len - reducer)]
        res.push(maxIndex + 1)

        //reverse entire array sothat max element comes to the end of an array
        arr = [...arr.reverse(0, len - reducer)]
        res.push(len - reducer)

        reducer++;
    }
    return res;
};

let arr = [3, 2, 4, 1] //[3,4,2,3,2]
console.log(pancakeSort(arr))