const event = require('events');
const eventImer = new event.EventEmitter();


var myFunction = () => {
    console.log("hello divya and varsha")
}


eventImer.on('lucky', myFunction);
eventImer.once('hello')
eventImer.emit('lucky');