
/*
variation 1 - 
find next smaller element in an array (same as above only comparison signs will flip, opposite of above)
*/

let arr = [1, 3, 2, 0, 0, 1, 4] // 0 2 0 -1 -1 -1 -1
let ans = []
let stack = []
let j = arr.length - 1
while (j >= 0) {

    if (stack.length == 0) {
        ans[j] = -1
        stack.push(arr[j]);
        j--
    }
    else if (stack[stack.length - 1] < arr[j]) {
        ans[j] = stack[stack.length - 1]
        stack.push(arr[j])
        j--
    } else if (stack[stack.length - 1] >= arr[j]) {
        while ((stack.length !== 0) && !(stack[stack.length - 1] < arr[j])) {
            stack.pop()
        }
        ans[j] = stack.length == 0 ? -1 : stack[stack.length - 1]
        stack.push(arr[j])
        j--
    }
}

console.log(ans)




