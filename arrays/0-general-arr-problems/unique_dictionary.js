

const dict = ["baa", "abcd", "abca", "cab", "cad"]
let k = 4

class Solution {
    findOrder(dict, N, K) {
        const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        let charsArr = chars.slice(0, K)
        while (charsArr.length > 0) {

            for (let i = 0; i < dict.length - 1; i++) {
                if (charsArr.length == 1) {
                    console.log(charsArr[0])
                    charsArr.splice(0, 1)
                } else {
                    let w1 = dict[i].split("")
                    let w2 = dict[i + 1].split("")
                    let x = 0
                    let y = 0
                    while (x < w1.length && y < w2.length) {
                        if (w1[x] !== w2[y]) {
                            console.log(w1[x])
                            let ind = charsArr.findIndex(el => el == w1[x])
                            charsArr.splice(ind, 1)
                            break;
                        } else {
                            x++;
                            y++
                        }
                    }
                }

            }
            charsArr--
        }

    }
}
