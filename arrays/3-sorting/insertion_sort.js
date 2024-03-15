const arr = [5, 2, 1, 3, 4]
const len = arr.length
for (let i = 1; i < len; i++) {
    let current = arr[i]
    let j = i - 1
    while (arr[j] > current && j >= 0) {
        arr[j + 1] = arr[j]
        j--
    }
    arr[j+1] = current
}
console.log(arr)