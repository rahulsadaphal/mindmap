const arr = [5, 2, 1, 3, 4]

function sort(arr) {
    if (arr.length == 1) return arr;

    let mid = Math.floor((0 + arr.length - 1) / 2)

    let slice = arr.slice(0, mid + 1)
    let resp1 = sort(slice)
    slice = arr.slice(mid + 1, arr.length)
    let resp2 = sort(slice)

    let i = 0;
    let j = 0;
    let finalArr = []
    while (i < resp1.length && j < resp2.length) {
        if (resp1[i] <= resp2[j]) {
            finalArr.push(resp1[i])
            i++
        } else {
            finalArr.push(resp2[j])
            j++
        }
    }
    while (i < resp1.length) {
        finalArr.push(resp1[i])
        i++
    }
    while (j < resp2.length) {
        finalArr.push(resp2[j])
        j++
    }

    return finalArr;
}

let resp = sort(arr)
console.log(resp)