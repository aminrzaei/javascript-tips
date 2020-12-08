// Strategy Design Pattern

function Pasta(){
  this.calcPrice = tools => {
    // ...
    return '20,000 Toman'
  }
}

function Pizza(){
  this.calcPrice = tools => {
    // ...
    return '50,000 Toman'
  }
}

const pasta = new Pasta();
const pizza = new Pizza();


function CoockingCost(){
  this.food = null
  this.setFood = food=>{
    this.food = food
  }
  this.calcPrice = tools=>{
    return this.food.calcPrice(tools)
  }
}

var tools = {rice:200}

const coockingCost = new CoockingCost();

coockingCost.setFood(pasta);
console.log('Pasta cocking cost = ' + coockingCost.calcPrice(tools))

coockingCost.setFood(pizza);
console.log('Pizza cocking cost = ' + coockingCost.calcPrice(tools))
