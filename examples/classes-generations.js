// Old & New class

// Old
function Oldclass(name){
  this.name = name
}

Oldclass.prototype.sayHello = function(){
  return `Old Hello ${this.name}`
}

// New
class Newclass{
  constructor(name){
    this.name = name
  }
  sayHello(){
    return `New Hello ${this.name}`
  }
} 


const aOldClass = new Oldclass('amin')
console.log(aOldClass.sayHello())


const aNewClass = new Newclass('amin')
aNewClass.sayHello()