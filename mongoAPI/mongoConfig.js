const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/petchain')
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Conectado com o mongoDB');
});
