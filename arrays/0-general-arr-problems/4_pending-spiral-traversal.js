



class Solution {
    spirallyTraverse(matrix, r, c) {
        let final = []
        while (matrix.length !== 0) {
            final.push(matrix.splice(0, 1))
            let rows = matrix.length
            let cols = rows == 0 ? 0 : matrix[0].length

            let temp = []
            for (let j = cols - 1; j >= 0; j--) {
                let temp1 = []
                for (let i = 0; i < rows; i++) {
                    temp1.push(matrix[i][j])
                }
                temp.push(temp1)
            }
            matrix = temp

        }
        let f = final.flat(Infinity)
        let str = ""
        for (let i of f) {
            str += i + " "
        }
        // return str.trim()
        console.log(str.trim())
    }
}


// var spiralOrder = function (matrix) {
//     let final = []
//     while (matrix.length !== 0) {
//         final.push(matrix.splice(0, 1))
//         let rows = matrix.length
//         let cols = rows == 0 ? 0 : matrix[0].length

//         let temp = []
//         for (let j = cols - 1; j >= 0; j--) {
//             let temp1 = []
//             for (let i = 0; i < rows; i++) {
//                 temp1.push(matrix[i][j])
//             }
//             temp.push(temp1)
//         }
//         matrix = temp

//     }
//     return final.flat(Infinity)
// };

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] // [1,2,3,6,9,8,7,4,5]
matrix =
    [[1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]] // 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
console.log(new Solution().spirallyTraverse(matrix))