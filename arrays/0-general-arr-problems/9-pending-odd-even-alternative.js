

class Solution {
    alternateOandE(ar) {

            let final = []
            let pivot;
            // ar.sort((a,b) => a-b)

            //find pivot
            let i = -1
            for(let j = 0; j<ar.length; j++){
                if(ar[j] % 2 !== 0){
                    i++
                    let temp = ar[i]
                    ar[i] = ar[j]
                    ar[j] = temp
                }
            }
            pivot = i+1
            // console.log(ar)

            //sort left and right arr
            let temp1 = ar.slice(0, pivot).sort((a,b) => a-b)
            let temp2 = ar.slice(pivot, ar.length).sort((a,b) => a-b)
            ar = [...temp1, ...temp2]

            //arranging final arr
            let k = 0
            let l = pivot
            while(k<pivot && l < ar.length){
                final.push(ar[k], ar[l])
                k++
                l++
            }
            while(k<pivot ){
                final.push(ar[k])
                k++
            }
            while(l < ar.length-1){
                final.push(ar[l])
                l++
            }

            let str = ''
            for(let i of final){
                str += i + " "
            }
            console.log(str)

    }
}




let nums = [1, 11, 7, 2, 8, 16] //1 2 7 8 11 16
nums = [1,2,3,2]
console.log(new Solution().alternateOandE(nums)) 