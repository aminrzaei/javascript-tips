// Factirialize 

// 0! = 1
// 1! = 0! * 1 => 1
// 2! = 1! * 2 => 2
// 3! = 2! * 3 => 6
// ...

function factirialize(n){
  if(n == 0 || n == 1) return 1;
  return factirialize(n-1)*n
}

factirialize(5)