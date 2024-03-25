
function median(ar1, ar2) {
    if (ar2.length < ar1.length) {
        [ar1, ar2] = [ar2, ar1]
    }
    let partitionLen = (ar1.length + ar2.length) % 2 == 0 ? (ar1.length + ar2.length) / 2 : (ar1.length + ar2.length + 1) / 2
    let low = 0
    let high = ar1.length;
    let mid1, mid2, l1, l2, r1, r2;
    while (low <= high) {
         mid1 = Math.floor((low + high) / 2)
         mid2 = partitionLen - mid1

         l1 = ar1[mid1 - 1] || Number.MIN_VALUE;
         l2 = ar2[mid2 - 1] || Number.MIN_VALUE;

         r1 = ar1[mid1] || Number.MAX_VALUE
         r2 = ar2[mid2] || Number.MAX_VALUE

        if (l1 > r2) {
            high = mid1
        }
        else if (l2 > r1) {
            low = mid1 + 1
        }else{
            break
        }
    }
    return (ar1.length + ar2.length) % 2 == 0 ?  (Math.max(l1, l2) + Math.min(r1, r2)) / 2 : Math.max(l1, l2)


}
let ar1 = [1, 2, 3, 4, 5, 6], ar2 = [7, 8, 9, 10]
ar1 = [1,2,3], ar2 = [4,5]
ar1 = [1,2], ar2 = [3,4]
console.log(median(ar1, ar2))