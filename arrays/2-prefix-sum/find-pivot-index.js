// https://leetcode.com/problems/find-pivot-index/

function pivot(arr) {
    let len = arr.length
    let left = new Array(len)
    let right = new Array(len)
    left[0] = 0
    right[len-1] = 0

    for(let i=1; i<len; i++){
        left[i] = left[i-1] + arr[i-1]
    }
    for(let i=len-2; i>=0; i--){
        right[i] = right[i+1] + arr[i+1]
    }
    // console.log(left, right)
    for(let i = 0; i<len; i++){
        if(left[i] == right[i]) return i;
    }
    return -1;
}

let arr = [1,7,3,6,5,6] // 3
arr = [1,2,3] // -1
arr = [2,1,-1] // 0
console.log(pivot(arr))