// Is foo

isFinite(0/1000) // true
isFinite(1/1000) // false

isNaN('Amin') // true
isNaN(100) // flase

Array.isArray(['amin', 'ali']) // true
Array.isArray({amin:'amin'}) // false