// String to Array
const str = 'Hi im amin'

const one = str.split('')
const two = [...str]
const three = Array.from(str)
const four = Object.assign({}, str)

console.log(one, two, three, four)