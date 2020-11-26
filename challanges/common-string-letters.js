var first = 'aminxz';
var second = 'xmobin';

var splitedFirst = first.split('');
var splitedSecond = second.split('');

var common = splitedFirst.filter((x)=>{
  return splitedSecond.includes(x);
})

console.log(common);