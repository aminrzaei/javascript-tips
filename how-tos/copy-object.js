// Copy object

const food = {
  pizza: '🍕',
  chicken: '🍗'
}

// Wrong Way

const wrong = food; // this not make a copy and just point to memory to food


// First Way
const newFood = Object.assign(food, {})
console.log(newFood)

// Second Way
const newFood2 = {...food}