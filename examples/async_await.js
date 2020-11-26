// Async Await

function hi(){
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      res('Hi :)')
    }, 2000)
  })
}

function by(){
  return 'By ;(';
}

async function greeting(){
  const sayHi = await hi();
  const sayBy = by();

  console.log(sayHi);
  console.log(sayBy)
}

greeting()