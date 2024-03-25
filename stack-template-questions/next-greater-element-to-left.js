
/* 
next greater element to the left (previous greater element) 1,3,2,0,0,1,4,9,7   ans -1,-1,3,2,2,2,-1,-1,-1
move from left to right (everything else is same)
*/

let arr = [1, 3, 2, 0, 0, 1, 4] // -1, -1, 3, 2, 2, 2, -1
let ans = []
let stack = []
let j = 0
while (j < arr.length) {

    if (stack.length == 0) {
        ans[j] = -1
        stack.push(arr[j]);
        j++
    }
    else if (stack[stack.length - 1] > arr[j]) {
        ans[j] = stack[stack.length - 1]
        stack.push(arr[j])
        j++
    } else if (stack[stack.length - 1] <= arr[j]) {
        while ((stack.length !== 0) && !(stack[stack.length - 1] > arr[j])) {
            stack.pop()
        }
        ans[j] = stack.length == 0 ? -1 : stack[stack.length - 1]
        stack.push(arr[j])
        j++
    }
}

console.log(ans)




