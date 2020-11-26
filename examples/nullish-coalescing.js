// Nullish coalescing

const duration = 0;

// This always retun flase for duration and 400 select everytime when duration is 0 or '' beacuse of Coercion

// const animationTime = duration || 400;

// one solution was to do this 
// (typeof duration === 'number' && duration) returns 0
const animationTime = (typeof duration === 'number' && duration) || 400

// Solution is - it doesn't work in repel.it
// const animationTime = duration ?? 400;

console.log(animationTime);