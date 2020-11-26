// Console
const msg = 'Hey Bro its me'

const family = [
  {name: 'amin', age: 23, gender: 'male'},
  {name: 'amir', age: 49, gender: 'male'},
  {name: 'zahra', age: 41, gender: 'female'},
  {name: 'hana', age: 15, gender: 'female'}
];

const foods = {pizza: '🍕', sandwich: '🍔', susage:'🌭' , egg: '🥚'}
const fruits = {apple: '🍎', cherry: '🍒',melon: '🍉'}

// Show styled console - don't work in repel.it
console.log(`%c ${msg}`, 'color: orange; font-weight: bold')

// Show object in table
console.table(family)

// Show multi object better 
// Dont console.log(family) and other in single line
console.log({foods, fruits})


// Timing in console
console.time('timer')
let i = 0
while(i < 1000){ i++}
console.timeEnd('timer')

// Tracing - to know where function called
const here = ()=> console.trace('i called here')
here()