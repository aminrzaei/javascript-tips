// Async Await

const getFruit = (name) => {
  const fruits = {
    pineapple: '🍍',
    peach: '🍑',
    strawberry: '🍓'
  }
  return fruits[name];
}

const makeSmoothie = async() => {
  // You can use try catch or not
  try{
    // const a = await getFruit(pineapple);
    // const b = await getFruit(peach);
    // const smoothie = [a, b]

    // Better for multi
    const a = getFruit('pineapple');
    const b = getFruit('peach');
    const smoothie = await Promise.all([a, b]);
    // If Error
    // throw 'Broken!'
    return smoothie

  } catch(err){
    console.log(err)
    // Ignoring by return
    return '🙄'
    // throwing another error
    // throw 'It is broken'
  }
}



makeSmoothie()
.then( val => console.log({ val }))
.catch( err => console.log({ err }))