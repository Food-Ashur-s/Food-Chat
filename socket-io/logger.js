'use strict';

const sio = require('socket.io-client');

const logger = sio.connect('http://localhost:3003');

logger.on('message', payload => {
    console.log('Message Recieved',payload);
});

// client.on('data', (data) => {
//     let event = JSON.parse(data);
  
//     console.log(new Date().toUTCString(), event.event, event.payload);
//   });
