
var trap = function (height) {
    let leftmax = new Array(height.length)
    let rightmax = new Array(height.length)
   

    leftmax[0] = height[0]
    rightmax[rightmax.length - 1] = height[height.length - 1]

    for (let i = 1; i < leftmax.length; i++) {
        leftmax[i] = Math.max(height[i], leftmax[i - 1])
    }

    for (let i = rightmax.length - 2; i >= 0; i--) {
        rightmax[i] = Math.max(height[i], rightmax[i + 1])
    }
    let res = 0
    for (let i = 0; i < height.length; i++) {
        res += Math.min(leftmax[i], rightmax[i]) - height[i]
    }
    return res;
};

let height = [4, 2, 0, 3, 2, 5] //9
let resp = trap(height)
console.log(resp)