const names = ['amin', 'ali']

name(...names)

function name (...args){
  const [amin, ali] = args;
  console.log(amin,ali)
}
