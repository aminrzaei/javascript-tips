const array = [1,2,3,4,5,6,7,8,9,10]
// Map 
const mapped = array.map(el=>{
  return el*2;
})
console.log(mapped)

// Filter
const filterd = array.filter(el =>{
  return(el % 2 == 0)
})
console.log(filterd)

// Reduce
const reduced = array.reduce((accumulator, el) =>{
  //accumulator is 5 => 55 + 5
  return accumulator + el;
},5)
console.log(reduced)

// SUM
function sum(arr){
  sum = 0;
  array.forEach(el => {sum = sum+el})
  console.log(sum);
}
sum(array)