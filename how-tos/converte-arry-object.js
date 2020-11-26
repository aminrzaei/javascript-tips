const array = [['amin', 23], ['ali', 25]]
const obj = {
  'amin':23,
  'ali':25
}

const arrayToObj = Object.fromEntries(array)
const objToArray = Object.entries(obj)

const copyObjectValuesToArray = Object.values(obj)

console.log(arrayToObj);
console.log(objToArray)

console.log(copyObjectValuesToArray)