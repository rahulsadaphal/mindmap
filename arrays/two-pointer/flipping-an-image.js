//https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function(image) {
    let final = []

    for(let i = 0; i< image.length; i++){
        let temp = []
        for(let j=image.length-1; j >=0; j--){
            temp.push(image[i][j] == 0 ? 1 : 0)
        }
        final.push([...temp])
    }
    return final
};

let image = [[1,1,0],[1,0,1],[0,0,0]] // [[1,0,0],[0,1,0],[1,1,1]]
// image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]] // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
console.log(flipAndInvertImage(image))