// Append items to array

// These methods change orginal one
let arr1 = ['😂']

arr1.push('😎')
arr1.splice(arr1.legth, 0, '🤐')
arr1[arr1.length] = '😴';

console.log(arr1)


// These methods create new one
const arr2 = ['🍰']

const arr3 = arr2.concat('🍗')
const arr4 = [...arr2, '🌭']

