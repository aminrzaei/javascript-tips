//Object destructuring

// [Object destructuring]
const amin = {name: 'Amin', age: 23, heigth: 178, face: '👶'}
// Bad
function whoIAm1(amin){
  console.log(`My name is ${amin.name}, and i\'m ${amin.age} years old and heigth of ${amin.heigth}'. My face is ${amin.face}`)
}
// whoIAm1(amin)

// Good
function whoIAm2({name, age, heigth, face}){
  console.log(`My name is ${name}, and i\'m ${age} years old and heigth of ${heigth}'. My face is ${face}`)
}
// whoIAm2(amin)

// Better
function whoIAm3(amin){
  const {name, age, heigth, face} = amin
  console.log(`My name is ${name}, and i\'m ${age} years old and heigth of ${heigth}'. My face is ${face}`)
}
// whoIAm3(amin)




