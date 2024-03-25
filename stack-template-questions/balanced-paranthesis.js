
/* 

(()) //yes
()) //no

*/

let arr = ['(', '(', ')', ')'] // yes
arr = ['(', '(', ')']
let stack = []

for(let i of arr){
    if(i == '('){
        stack.push(i)
    }else if(i == ')'){
        stack.pop()
    }
}

console.log(stack.length == 0 ? 'yes': 'no')




