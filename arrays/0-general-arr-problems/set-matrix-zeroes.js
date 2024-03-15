var setZeroes = function(matrix) {
    // console.log(matrix)
    let col = new Array(matrix[0].length)
    let row = new Array(matrix.length)

    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            if(matrix[i][j] == 0){
                row[i] = 1
                col[j] = 1
            }
        }
    }
    
      for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            if(col[j] == 1 || row[i] == 1){
               matrix[i][j] = 0
            }
        }
    }
    console.log(matrix)
};
