function useName(){
  let name = 'Amin'
  return [
    () => `Hi ${name}`,
    (newName) => name = newName
  ]
}

const [hi, setName] = useName()
console.log(hi()) // Hi Amin
setName('MMD')
console.log(hi()) // Hi MMD