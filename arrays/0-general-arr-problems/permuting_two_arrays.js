
function twoArrays(k, A, B) {
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return 'NO'
        }
    }
    return 'YES'
}

let k = 1
let A = [0, 1]
let B = [0, 2]

k = 10
A = [2, 1, 3]
B = [7, 8, 9]

k=5
A=[1,2,2,1]
B=[3,3,3,4]

const res = twoArrays(k, A, B)
console.log(res)