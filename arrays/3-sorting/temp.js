// const obj1 = {
//     a:1,
//     b: {c:1}
// }
// const obj2 = Object.create(obj1)
// console.log(obj1 == obj2)
// obj2.b = {d:1}
// console.log(obj1,  obj2)

const arr = [3, 4, 5, 1, 2]
let i = 0;
let j = arr.length - 1
let pivot;
while (i <= j) {
    if (arr[i] > arr[i + 1]) {
        console.log('pivot is', arr[i])
        pivot = i
    } else if (arr[j] < arr[j - 1]) {
        console.log('pivot is', arr[j - 1])
        pivot = j
    }
    i++
    j--
}


function binarySearch(arr, low, high, key) {
    if(low == high && key == arr[low]) return true;
    else if(low == high && key !== arr[low]) return false;
    
    let mid = Math.floor((low + high)/2)
    if(key == arr[mid]){
        console.log('key found at - ', mid, ' index')
        return false
    }
    let resp
    if(key < arr[mid]){
        resp = binarySearch(arr, low, mid, key)
        if(resp) return true;
        else return false;
    }else{
        resp = binarySearch(arr, mid+1, high)
        if(resp) return true;
        else return false;
    }
}

const key = 2
if (key == arr[pivot]) {
    console.log('key found at - ', pivot, ' index')
} else {
    const resp = binarySearch(arr, 0, pivot, key)
    if(resp){
        return
    }else{
        const resp = binarySearch(arr, pivot + 1, arr.length - 1, key)
        if(resp) return
    }
    
}
