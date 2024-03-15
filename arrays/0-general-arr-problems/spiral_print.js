




class Solution {
    spirallyTraverse(matrix, r, c) {

        function roateArr(arr, r, c) {
            let newArr = []
            for (let j = c - 1; j >= 0; j--) {
                let temp = []
                for (let i = 0; i < r; i++) {
                    temp.push(arr[i][j])
                }
                newArr.push(temp)
            }
            return newArr
        }



        const finalArr = []
        while (matrix.length !== 0) {
            finalArr.push(matrix.splice(0, 1))
            let cols = matrix[0]?.length
            arr = roateArr(matrix, matrix.length, cols)
        }
        return finalArr.flat(Infinity)

    }

}



let arr = [[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10, 9, 8, 7]];




let res = new Solution().spirallyTraverse(arr)
console.log(res)




