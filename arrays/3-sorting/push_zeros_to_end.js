let arr = [0,1,0,10,0,20,0]
arr = [0,0,0,1,10,20]

function partition(arr, low, high) {
    //find pivot
    const pivot = 0

    //partition array
    let i = low - 1
    for (let j = low; j <= high; j++) {
        if (arr[j] > pivot) {
            i++
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    //bring pivot element to middle
    // let temp = arr[i + 1]
    // arr[i + 1] = arr[high]
    // arr[high] = temp
    // return i + 1
}
partition(arr, 0, arr.length-1)
console.log(arr)