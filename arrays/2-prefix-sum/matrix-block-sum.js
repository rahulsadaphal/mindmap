// https://leetcode.com/problems/matrix-block-sum/description/
// https://leetcode.com/problems/matrix-block-sum/solutions/482730/python-js-go-c-o-m-n-integral-image-dp-w-explanation/


// Explanation on integral image:

// Here we use the technique of integral image, which is introduced to speed up block computation.

// Also, this technique is practical and common in the field of matrix operation and image processing such as filtering and feature extraction.

// Block sum formula on integral image.
// Block-sum of red rectangle = block-sum of D - block-sum of B - block-sum of C + block-sum of A

var matrixBlockSum = function (mat, k) {

    let [rows, cols] = [mat.length, mat[0].length];

    let integralImg = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    let outputImg = new Array(rows).fill(0).map(() => new Array(cols).fill(0));


    // building integral image to speed up block sum computation
    for (let r = 0; r < rows; r++) {
        let pixelSum = 0;

        for (let c = 0; c < cols; c++) {
            pixelSum += mat[r][c];
            integralImg[r][c] = pixelSum;

            if (r > 0) {
                integralImg[r][c] += integralImg[r - 1][c];
            }
        }

    }
    console.log(integralImg)

    // compute block sum by looking-up integral image
    for (let r = 0; r < rows; r++) {

        let [minRow, maxRow] = [Math.max(0, r - k), Math.min(rows - 1, r + k)];

        for (let c = 0; c < cols; c++) {

            let [minCol, maxCol] = [Math.max(0, c - k), Math.min(cols - 1, c + k)];

            outputImg[r][c] = integralImg[maxRow][maxCol]; //D

            if (minRow > 0) {
                outputImg[r][c] -= integralImg[minRow - 1][maxCol]; //B
            }

            if (minCol > 0) {
                outputImg[r][c] -= integralImg[maxRow][minCol - 1]; //C
            }

            if ((minRow > 0) && (minCol > 0)) {
                outputImg[r][c] += integralImg[minRow - 1][minCol - 1]; //A
            }


        }
    }

    return outputImg;


};

let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 1 // [[12,21,16],[27,45,33],[24,39,28]]
// mat = [[1,2,3],[4,5,6],[7,8,9]], k = 2 // [[45,45,45],[45,45,45],[45,45,45]]
console.log(matrixBlockSum(mat, k))