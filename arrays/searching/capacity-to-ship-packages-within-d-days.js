

var shipWithinDays = function (weights, days) {
    let left = Math.max(...weights) // to ship at least one item per day
    let right = weights.reduce((acc, el) => acc + el, 0) // to ship all items in one day
    
    while(left < right){
        let mid = Math.floor((left + right) / 2)
        let cur = 0, daysNeeded = 1
        for(let i  of weights){
            cur += i;
            if(cur > mid){
                cur = i
                daysNeeded++
            }
        }
        if(daysNeeded > days){
            left = mid+1
        }else{
            right = mid
        }
    }
    
    
   return left;
};

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5;
weights = [3,2,2,4,1,4], days=3
let resp = shipWithinDays(weights, days);
console.log(resp);