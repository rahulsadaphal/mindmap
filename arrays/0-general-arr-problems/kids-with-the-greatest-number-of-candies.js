

var kidsWithCandies = function (candies, extraCandies){
   let currentGreatest = Math.max(...candies)
   let ans = new Array(candies.length)
   for(let i = 0; i<candies.length; i++){
    if(candies[i] + extraCandies >= currentGreatest){
        ans[i] = true
    }else{
        ans[i] = false
    }
   }
   return ans;
};

let candies = [2,3,5,1,3], extraCandies = 3 //[true,true,true,false,true] 
candies = [4,2,1,1,2], extraCandies = 1 //[true,false,false,false,false]
candies = [12,1,12], extraCandies = 10 //[true,false,true]
let resp = kidsWithCandies(candies, extraCandies)
console.log(resp)