const str = 'amin rezaei';

// First Method
const reversed1 = str.split('').reverse().join('')
console.log(reversed1)

// Second Method
let reversed2 = [];
for(i = str.length -1 ; i >= 0 ; i--){
  reversed2 += str[i]
}
console.log(reversed2)