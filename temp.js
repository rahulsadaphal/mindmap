let str = 'abcabcbb' //abc
str = 'bbbbb' //b
str = 'pwwkew' //pw

let temp = []
let len = Number.MIN_VALUE
for(let i of str){
    if(!temp.includes(i)){
        temp.push(i)
    }else{
        len = Math.max(len, temp.length)
        temp = [i]
    }
}
console.log(len)