class Solution {
    solve(anish, binish, n) {
        function bubble(arr) {
            let swaps = 0
            const len = arr.length
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j + 1] = temp
                        swaps++
                    }
                }
            }
            return swaps
        }
        //-------------------------------
        let swap1 = bubble(anish)
        let swap2 = bubble(binish)
        if(swap1 > swap2){
            console.log('Binish')
        }else if(swap1 <swap2){
            console.log('Anish')
        }else{
            console.log('Tie')
        }

    }
}

let Anish = [7, 2, 8, 9, 5]
let Binish = [4, 6, 2, 5, 3]
new Solution().solve(Anish, Binish, Anish.length)