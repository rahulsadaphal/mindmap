


class Solution {
    isLuckyNumber(n) {
        let num = n
        let temp = [];
        function getCube(num) {
            let cubeSum = 0
            while (num !== 0) {
                let rem = num % 10
                cubeSum += rem * rem * rem
                let div = Math.floor(num / 10)
                num = div
            }
            return cubeSum
        }
        let resp1;
        let result = false
        while (!temp.includes(resp1)) {
            resp1 = getCube(num)
            if (resp1 == 1) {
                result = true;
                break;
            }
            temp.push(resp1);
        }
        return result

    }
}

let num = 100
num = 100
let resp = new Solution().isLuckyNumber(num)
console.log(resp)
