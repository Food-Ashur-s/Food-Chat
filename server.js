'use strict';

const PORT = process.env.PORT || 3003 ;
const sio = require('socket.io')(PORT);


sio.on('connection',socket => {
    console.log('connected On ID No.' , socket.id);

    socket.on('talk' , payload => {
        // console.log(payload);
        sio.emit('message', payload);
    });

    // socket.on('disconnected', () => {
    //     console.log(socket.id);
    // });
}); 

// Our Nmaespace 
const foodChat = sio.of('/food');
foodChat.on('connection', socket => {
    socket.on('food-talk' , payload => {
        foodChat.emit('message',payload);
    });
});