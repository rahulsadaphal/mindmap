function partition(arr, low, high) {
    //find pivot
    const pivot = arr[high]

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
    //bring pivot element to middle
    let temp = arr[i + 1]
    arr[i + 1] = arr[high]
    arr[high] = temp
    return i + 1
}

function quick(arr, low, high) {
    if (low < high) {
        let pivotPoint = partition(arr, low, high)
        quick(arr, low, pivotPoint - 1)
        quick(arr, pivotPoint + 1, high)
    }
}

const arr = [5, 1, 10, 8, 7, 20]
quick(arr, 0, 5)
console.log(arr)