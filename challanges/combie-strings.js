//string join ways
const icon = '❤';

const one = `hi ${icon}`
const two = 'hi' + ' ' + icon
const three = ['hi', icon].join(' ')
const four = ''.concat('hi', ' ', icon)


console.log(one)
console.log(two)
console.log(three)
console.log(four)