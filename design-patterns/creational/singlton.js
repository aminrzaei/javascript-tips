// Singlton Design Pattern

const singltonFather = (function(){
  function fatherIsUniqe(){
    console.log('Father is uniqe')
  }

  let father

  function createFather(){
    father = new fatherIsUniqe();
    return father;
  }
  
  return {
    getFather: ()=>{
      if(!father)
        father = createFather()
      return father
    }
  }
})()

const father1 = singltonFather.getFather();
const father2 = singltonFather.getFather();

console.log(father1 === father2);