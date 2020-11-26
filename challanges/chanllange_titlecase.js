// Titlecase

const sentence = 'hi i\'m amin rezaei and glad to meet you';

function titlecase(sentence){
  const words = sentence.split(' ');
  words.forEach((el, index)=>{
    words[index] = words[index][0].toUpperCase() + el.slice(1)
  })
  return words.join(' ')
}
console.log(titlecase(sentence))