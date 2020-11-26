// Find longest word
const sentence = "Amin is a good boy & know it, yes baby i love you cutty"

// First method
function findLongrest1(sentence){
  let longest = '';
  const words = sentence.split(' ');
  words.forEach((el)=>{
    if(el.length > longest.length) longest = el
  });
  return longest
}

// Secon method
function findLongrest2(sentence){
  return sentence.split(' ').sort((a, b)=>{
    return b.length - a.length;
  })[0]
}

console.log(findLongrest1(sentence))
console.log(findLongrest2(sentence))