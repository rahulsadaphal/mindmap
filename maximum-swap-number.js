// https://leetcode.com/problems/maximum-swap/description/

var maximumSwap = function (num) {
    let maxNum = num
    let tempnum = `${num}`.split("")
    for (let i = 0; i < tempnum.length - 1; i++) {
        for (let j = i + 1; j < tempnum.length; j++) {
            let temp = tempnum[i]
            tempnum[i] = tempnum[j]
            tempnum[j] = temp

            if (Number.parseInt(tempnum.join("")) > maxNum) {
                maxNum = Number.parseInt(tempnum.join(""))
            }
            tempnum = `${num}`.split("")
        }
    }
    return maxNum
};
let num = 2736 //7236
num=9973 //9973
num = 98368 //98863
console.log(maximumSwap(num))