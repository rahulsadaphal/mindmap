

function beautifulDays(i, j, k) {
    function reverse(num) {
        let finalNum = ''
        while (num !== 0) {
            finalNum += num % 10
            num = Math.floor(num / 10)
        }
        return finalNum
    }
    let beautifulDays = 0
    for (let z = i; z <= j; z++) {
        let rev = reverse(z)
        let diff = Math.abs(z - rev)
        let div = diff / k
        if (Number.isInteger(div)) {
            beautifulDays++
        }
    }
    return beautifulDays
}
console.log(beautifulDays(20, 23, 6))