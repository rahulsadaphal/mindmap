

class Solution {
    searchPosition(arr, target) {


        function rec(arr, low, high, target) {
            if (low > high) return low
            let mid = Math.floor(((low + high) / 2))
            if (target == arr[mid]) return mid;

            if(target < arr[mid]){
                return rec(arr, low, mid-1, target)
            }else{
                return rec(arr, mid+1, high, target)
            }
        }


        let low = 0
        let high = arr.length - 1
        let resp = rec(arr, low, high, target)
        return resp
    }

}

let arr = [1, 3, 5, 6], target = 5 //2
target = 2 //1
target = 4 //1
target = 3

arr = [1,3,4,5,6,7,9]
target = 2

let reesp = new Solution().searchPosition(arr, target)
console.log(reesp)