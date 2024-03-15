

class Solution {
    sortCards(cards) {
        let final = []
        let i = 0;
        while (i < cards.length) {
            if (Number.isInteger(Number(cards[i]))) {
                final.push(...cards.splice(i, 1))
            } else { i++ }
        }
        final.push(...cards)
        let str = ''
        for(let i of final){
            str += i + ' '
        }
        console.log(str)
    }
}

let cards = ['3', '2', '+', '4', '*', '-', '$', '5', '0']  //3 2 4 5 + * - $

console.log(new Solution().sortCards(cards))