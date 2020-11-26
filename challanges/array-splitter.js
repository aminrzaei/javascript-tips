// Array Splitter 
const  myArray = [1, 2, 3, 4, 5, 6, 7]

function arraySplitter(myArray, splits){
  let splitted = [];
  while(myArray.length > 0){
    splitted.push(myArray.slice(0, splits))
    myArray = myArray.slice(2);
  }
  return splitted;
}

console.log(arraySplitter(myArray, 2))