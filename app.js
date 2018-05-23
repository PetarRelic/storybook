const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

//Passport config
require('./config/passport')(passport);

//Load routes
const auth = require('./routes/auth');


const app = express();

app.get('/', (req, res) => {
    res.send('It works!');
});

//use routes
app.use('/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});