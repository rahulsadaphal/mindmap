
let map = new Map()
let str = "sagara"
for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
console.log(map)