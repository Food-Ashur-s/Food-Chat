'use strict';

const sio = require('socket.io-client');

const food = sio.connect('http://localhost:3003/food');

food.on('message' , payload => {
    console.log('Message Recieved from Food Chat' , payload);
});