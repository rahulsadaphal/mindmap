const dict = ['ting', 'blackberry', 'sing', 'raspberry', 'ling']
//sort this dictionary based upon rhymes

for(let i =0; i<dict.length; i++){
    dict[i] = dict[i].split("").reverse().join("")
}
dict.sort()
console.log(dict)