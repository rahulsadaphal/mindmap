




class Solution {
    isLoopingNumber(n) {
        function sqrt(n) {
            // console.log(n)
            let finalNum = 0
            while (n !== 0) {
                let rem = n % 10
                finalNum += (rem * rem);
                n = Math.floor(n / 10)
            }
            return finalNum
        }

        let temp = []
        while (true) {
            n = sqrt(n)
            if (n == 1) {
                return true
            } else if (temp.includes(n)) return false;
            temp.push(n)
        }
    }
}

let res = new Solution().isLoopingNumber(23)
console.log(res)