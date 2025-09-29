const EventEmitter = require('events')

const customeEmitter = new EventEmitter()
customeEmitter.on('response', (name, id) => {
    console.log(`Data Received user: ${name} and id: ${id}`)
})
customeEmitter.on('response', () => {
    console.log('some other logic ')
})
customeEmitter.on('response', () => {
    console.log('logic ++')
})

customeEmitter.emit('response', 'john', 35)  // 'response' it should be same as '-' data in this form .on method 
// If I put the .emit above the .on then nothing will print, it only emit the .on method above it.