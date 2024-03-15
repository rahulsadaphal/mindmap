

class Solution {
    solve(inventory1, inventory2) {
        const final = []
        let i = 0;
        let j = 0;
        while(i<inventory1.length && j < inventory2.length){
            if(inventory1[i] <= inventory2[j]){
                final.push(inventory1[i])
                i++
            }else{
                final.push(inventory2[j])
                j++
            }
        }

        while(i<inventory1.length){
            final.push(inventory1[i])
                i++
        }

        while(j<inventory2.length){
            final.push(inventory2[j])
                j++
        }

        let finalStr = ''
        final.map(el => {
            finalStr += el + ' '
        })
        console.log(finalStr)
    }
}

let inv1 = ['book', "enchanted", "spell", "wand"]
let inv2 = ['ancient', 'dragon', 'magic', 'scroll']

//  inv1 = ['a']
//  inv2 = ['b']
const resp = new Solution().solve(inv1, inv2)
// console.log(resp)