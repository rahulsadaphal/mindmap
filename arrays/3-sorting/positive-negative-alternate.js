let arr = [2, -1, -2, 3, 4, -5] //-1 2 -2 3 -5 4
let pivotind;
function partition(arr, low, high) {
    //find pivot
    const pivot = 0

    //partition array
    let i = low - 1
    for (let j = low; j <= high; j++) {
        if (arr[j] < pivot) {
            i++
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    pivotind = i + 1
}
partition(arr, 0, arr.length - 1)
let finaArr = []
let i = 0;
let j = pivotind
while (i < pivotind && j < arr.length) {
    finaArr.push(arr[i])
    finaArr.push(arr[j])
    i++
    j++
}
while (i < pivotind) {
    finaArr.push(arr[i])
    i++
}
while (j < arr.length) {
    finaArr.push(arr[j])
    j++
}
console.log(arr, pivotind, finaArr)