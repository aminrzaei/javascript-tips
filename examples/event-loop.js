// Event Loops

console.log('🍟 Synchronous 1')

setTimeout( _ => console.log('🍰 Timeout'))

// MicroProcess
Promise.resolve().then( _ => console.log('🌭 Promise'))

console.log('🍒 Synchronous 2')