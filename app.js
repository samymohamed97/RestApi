const express = require('express');
const app = express();
const mongoose = require('mongoose');
//require('dotenv/config');


//Impost Routes

//const postsRoute = require('./routes/posts');
//app.use('./posts'.postsRoute);

app.get('/',(req,res) => {
    res.send('we are in home');
});

app.get('/posts',(req,res) => {
    res.send('we are in posts');
});

//CONNECT

mongoose.connect('mongodb+srv://Sami:sami@20000@demo.cl55ahv.mongodb.net/?retryWrites=true&w=majority' , () =>
 console.log('connected to DB'));

app.listen(3000);