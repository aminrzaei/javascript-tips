// Remove empty slots
const arr = [1,,,2,3,,4,5]
const flatArr = arr.flat()

console.log(flatArr)


// Extract nested arrays
const nestedArr = [1, [2, 3], [4 ,[5, [6]]]]
const unNestedArr = nestedArr.flat(Infinity)

console.log(unNestedArr)