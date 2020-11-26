// Promises

const success = true;

function hello(){
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      console.log('Hi')
      if(success) res()
      else rej()
      res()
  },2000)
  })
}

function goodbye(){
  console.log('Goodbye')
}


hello().then(()=>{
  goodbye()
}).catch(()=>{
  console.log('Sorry ;(')
})
