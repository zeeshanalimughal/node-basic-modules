const event = require('events')

var eventEmitter = new event.EventEmitter()

eventEmitter.on('message', function (data){
    console.log(data)
})
eventEmitter.on('message', function (data){
    console.log(data)
})
eventEmitter.on('message', function (data){
    console.log(data)
})

var eventListers = require('events')
.EventEmitter.listenerCount(eventEmitter,'message')

console.log(eventListers)

eventEmitter.emit('message','this is a message')
