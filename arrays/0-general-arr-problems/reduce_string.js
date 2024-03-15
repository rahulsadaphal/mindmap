let s = 'aa'
const obj = {}
for(let i of s){
    obj[i] = obj[i] ? obj[i]+1: 1
}
let finalString = ''
for(let k of Object.keys(obj)){
    if(obj[k] % 2 !== 0){
        finalString += k
    }
}
console.log(finalString)