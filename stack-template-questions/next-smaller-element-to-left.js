
/* 
next smaller element to the left
go from left to right and flip the signs
*/

let arr = [1, 3, 2, 0, 0, 1, 4] // -1, 1, 1, -1, -1, 0, 1
let ans = []
let stack = []
let j = 0
while (j < arr.length) {

    if (stack.length == 0) {
        ans[j] = -1
        stack.push(arr[j]);
        j++
    }
    else if (stack[stack.length - 1] < arr[j]) {
        ans[j] = stack[stack.length - 1]
        stack.push(arr[j])
        j++
    } else if (stack[stack.length - 1] >= arr[j]) {
        while ((stack.length !== 0) && !(stack[stack.length - 1] < arr[j])) {
            stack.pop()
        }
        ans[j] = stack.length == 0 ? -1 : stack[stack.length - 1]
        stack.push(arr[j])
        j++
    }
}

console.log(ans)




