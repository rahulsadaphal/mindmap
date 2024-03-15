

class Solution {
    alternatePandE(ar) {

        let final = []
        let pivot;
        // ar.sort((a,b) => b-a)

        //find pivot
        let pp = 0
        let i = -1
        for (let j = 0; j < ar.length; j++) {
            if (ar[j] < 0) {
                i++
                let temp = ar[i]
                ar[i] = ar[j]
                ar[j] = temp
            }
        }
        pivot = i + 1
        // console.log(ar)

        //sort left and right arr
        let temp1 = ar.slice(0, pivot).sort((a, b) => b - a)
        let temp2 = ar.slice(pivot, ar.length).sort((a, b) => a - b)
        ar = [...temp1, ...temp2]

        //arranging final arr
        let k = 0
        let l = pivot
        while (k < pivot && l < ar.length) {
            final.push(ar[k], ar[l])
            k++
            l++
        }
        while (k < pivot) {
            final.push(ar[k])
            k++
        }
        while (l < ar.length) {
            final.push(ar[l])
            l++
        }

        let str = ''
        for (let i of final) {
            str += i + " "
        }
        console.log(str)

    }
}




let nums = [-5, -2, 3, 4, -1, 9, -7, -10] //-1,3,-2,4,-5,9,-7,-10
nums = [-1, 3, 4, -6, 2, 5, 9, -2] //-1,2,-2,3,-6,4,5,9
nums = [0, -3, 5, 9, -4, 10, -6]
console.log(new Solution().alternatePandE(nums)) 