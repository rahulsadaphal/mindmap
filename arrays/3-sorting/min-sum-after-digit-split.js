var minimumSum = function (num) {

    const arr = num.toString().split('').sort()
    return parseInt(arr[0] + arr[2]) + parseInt(arr[1] + arr[3])


};

let num = 2932 //52
num = 4009 //13
num = 2687 //95
let resp = minimumSum(num)
console.log(resp)