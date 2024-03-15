

var countNegatives = function(grid) {
    let count = 0
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[i].length; j++){
            if(grid[i][j] < 0){
                count++
            }
        }
    }
    return count
};

let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
grid = [[3,2],[1,0]]
let resp = countNegatives(grid)
console.log(resp)