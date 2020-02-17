'use strict';

const sio = require('socket.io-client');

// Genertae fake data 
// const faker = require('faker');

// create acutal client 
const client = sio.connect('http://localhost:3003');
const foodClient = sio.connect('http://localhost:3003/food');

client.emit('talk' ,'hello from donor');
foodClient.emit('food-talk','hello fom food Onwers');

// setInterval(() => {
//     client.emit('talk' , 'hello from donor');
// },500);