
/* 

max area under histogram
[10 20 40 30 50 60] //plot on graph connected with each otehr with height on y axis
intuition - for any arr[i] bar, try to count smaller elment to left and right, sothat we can draw horizontal line and
stop exactly when we find smaller index, bcz we can drwa line only when left and right elements are larger or equal to than current element


if u choose height 10, u can cover 6 bars and area is 60
if u choose 20, u can cover 5 bars and area is (5*20) is 100
if u choose 30, u can cover 4 bars and area is (4*30) is 120
if u choose 50, 2 bars are coverable so area is 50*2 = 100
if u cover 30 bar ans is 30 and for last 60 bar ans is 60
so max answer is 120

try to plot on notebook to get clear understanding

basically try to cover how much each bar can cover the max bars from left and right

*/

let arr = [10, 20, 40, 30, 50, 40]
arr = [10,20,40,30]

// for every bar, find out smaller element to the left
let ans = []
let stack = []
let j = 0
while (j < arr.length) {

    if (stack.length == 0) {
        ans[j] = 0
        stack.push([arr[j], j]);
        j++
    }
    else if (stack[stack.length - 1][0] < arr[j]) {
        ans[j] = stack[stack.length - 1][1]
        stack.push([arr[j], j])
        j++
    } else if (stack[stack.length - 1][0] >= arr[j]) {
        while ((stack.length !== 0) && !(stack[stack.length - 1][0] < arr[j])) {
            stack.pop()
        }
        ans[j] = stack.length == 0 ? 0 : stack[stack.length - 1][1]
        stack.push([arr[j], j])
        j++
    }
}
let left_smaller = [...ans]
console.log(left_smaller)


// for every bar find smaller element to the right
 ans = []
 stack = []
 j = arr.length-1
while (j >= 0) {

    if (stack.length == 0) {
        ans[j] = arr.length
        stack.push([arr[j], j]);
        j--
    }
    else if (stack[stack.length - 1][0] < arr[j]) {
        ans[j] = stack[stack.length - 1][1]
        stack.push([arr[j], j])
        j--
    } else if (stack[stack.length - 1][0] >= arr[j]) {
        while ((stack.length !== 0) && !(stack[stack.length - 1][0] < arr[j])) {
            stack.pop()
        }
        ans[j] = stack.length == 0 ? arr.length : stack[stack.length - 1][1]
        stack.push([arr[j], j])
        j--
    }
}
let right_smaller = [...ans]
console.log(right_smaller)


let max = Number.MIN_VALUE
for(let i = 0; i < arr.length; i++){
    max = Math.max(max, (Math.abs(left_smaller[i] - right_smaller[i]) - 1) * arr[i])
}
console.log(max)
