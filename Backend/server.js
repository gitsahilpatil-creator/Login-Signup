const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

const userRoute = require('./routes/user');

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/login-app').then(() => console.log('MongoDB Connected'));

app.use('/user', userRoute);

app.listen(PORT, () => console.log(`Server Running of Port : ${PORT}`));