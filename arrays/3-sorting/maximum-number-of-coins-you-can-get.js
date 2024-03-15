
var maxCoins = function(piles) {
    piles.sort((a,b) => b-a)
    let len = piles.length/3
    
    let sum = 0
    for(let i = 1; i<piles.length-len; i+=2){
        sum+=piles[i]
    }
    return sum
};

let piles = [2,4,1,2,7,8]
// piles = [2,4,5]
// piles = [9,8,7,6,5,1,2,3,4]
let resp = maxCoins(piles)
console.log(resp)