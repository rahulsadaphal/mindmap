/*  
    You are given a string: "sagara". You have to return the number of unique chars u see in the string.
    whenever there is a mention of uniqueness or removal of duplicates, sets is used.
    In JS Sets also maintains the order of inserted elements.
*/

let str = "sagara"
function solution(str){
    let s = new Set()
    for(let i of str){
        s.add(i)
    }
    return s.size
    // return [...s].join("")
}
console.log(solution(str))