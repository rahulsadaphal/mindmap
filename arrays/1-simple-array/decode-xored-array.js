//https://leetcode.com/problems/decode-xored-array/description/

var decode = function(encoded, first) {
    let final = new Array(encoded.length+1)
    final[0] = first
    // Since that encoded[i] = arr[i] XOR arr[i+1], then arr[i+1] = encoded[i] XOR arr[i].
    for(let i=0; i<encoded.length; i++){
        final[i+1] = encoded[i] ^ final[i]
    }

    return final;
};

let encoded = [1,2,3], first = 1 //[1,0,2,1]
encoded = [6,2,7,3], first = 4 //[4,2,0,7,4]

let resp = decode(encoded, first)
console.log(resp)
