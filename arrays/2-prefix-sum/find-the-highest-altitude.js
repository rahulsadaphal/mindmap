//https://leetcode.com/problems/find-the-highest-altitude/description/

var largestAltitude = function (gain) {
    let alt = new Array(gain.length + 1)
    alt[0] = 0

    for (let i = 0; i < gain.length; i++) {
        alt[i + 1] = gain[i] + alt[i]
    }
    // console.log(alt)
    alt.sort((a, b) => b - a)
    //    console.log(alt)
    return alt[0]
};

let gain = [-5, 1, 5, 0, -7] // 1
// gain = [-4,-3,-2,-1,4,3,2] // 0
console.log(largestAltitude(gain))