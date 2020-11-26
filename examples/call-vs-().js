const human = {
  face: '😎'
}

function hello(){
  console.log(this)
  return this.face;
}


// const result = hello(human) // undefined
const result = hello.call(human)

console.log(result)