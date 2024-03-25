

//brute force using 2 pointers or 2 loops o(n^2)
//keep pushing element into stack whenever treversed from right to left
//when stack empty ans is -1
//when top > current ans = top
//when top <= current pop () until stack empty else put -1

let arr = [1, 3, 2, 0, 0, 1, 4] // 3,4,4,1,1,4,-1
let ans = []
let stack = []
let j = arr.length - 1
while (j >= 0) {

    if (stack.length == 0) {
        ans[j] = -1
        stack.push(arr[j]);
        j--
    }
    else if (stack[stack.length - 1] > arr[j]) {
        ans[j] = stack[stack.length - 1]
        stack.push(arr[j])
        j--
    } else if (stack[stack.length - 1] <= arr[j]) {
        while (!(stack[stack.length - 1] > arr[j])) {
            stack.pop()
        }
        ans[j] = stack.length == 0 ? -1 : stack[stack.length - 1]
        stack.push(arr[j])
        j--
    }
}

console.log(ans)




