
/* 

maximum stock span problem
sequence of stock prices
[20,30,10,20,15,40,20]
you have to tell for how many days it took to beat the maximum or how long it remained maximum
20 is max value so far, so it is max only for 1 day. bcz next day is 30
30's record broken by 40 after 5 days
10 only fro 1 day
20  for 3 day
15 for 1 day
40 for 2 days
20 remained for 1 day
so op = 1, 5, 1, 3, 1, 2, 1

*/

let arr = [20, 30, 10, 20, 15, 40, 20] // 1, 5, 1, 3, 1, 2, 1
let ans = []
let stack = []
let j = arr.length - 1
while (j >= 0) {

    if (stack.length == 0) {
        ans[j] = 1
        stack.push([arr[j], j]);
        j--
    }
    else if (stack[stack.length - 1][0] > arr[j]) {
        ans[j] = stack[stack.length - 1][1] - j
        stack.push([arr[j], j])
        j--
    } else if (stack[stack.length - 1][0] <= arr[j]) {
        while ((stack.length !== 0) && !(stack[stack.length - 1][0] > arr[j])) {
            stack.pop()
        }
        ans[j] = stack.length == 0 ? arr.length - j : stack[stack.length - 1][1] - j + 1
        stack.push([arr[j], j])
        j--
    }
}

console.log(ans)




