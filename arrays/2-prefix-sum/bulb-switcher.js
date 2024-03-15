

var bulbSwitch = function (n) {
    if (n == 0) return 0;

    // n bulbs initially off, so create an array and set all bulbs to off
    let bulbs = new Array(n)
    // bulbs.fill(0)

    let diffArray = new Array(n + 1)
    diffArray.fill(0)

    for (let round = 1; round <= bulbs.length; round++) {
        for (let i = 0; i < bulbs.length; i++) {
            if (i % round == round - 1) {
                diffArray[i] += 1
                diffArray[i + 1] -= 1
            }
        }
    }

    //calculate final prefix sum
    let prefixSum = new Array(n + 1)
    prefixSum[0] = diffArray[0]
    for (let i = 1; i < diffArray.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + diffArray[i]
    }

    //update final bulb array
    for (let i = 0; i < prefixSum.length; i++) {
        if (prefixSum[i] % 2 !== 0) {
            bulbs[i] = 1
        }
    }

    //calculate final sum
    let sum = bulbs.reduce((ac, el) => ac + el, 0)

    return sum

};

let resp = bulbSwitch(99999)
console.log(resp)


var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};