require('dotenv').config()


const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const indexRouter = require('./routes/index');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hacktiv-git', {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors())

app.use('/', indexRouter);




app.listen(port, () => {
    console.log(`listen to ${port}`);
})