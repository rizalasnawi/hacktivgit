require('dotenv').config()


const express = require('express');
const app = express();
const port = 3000

const indexRouter = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', indexRouter);


app.listen(port, () => {
    console.log(`listen to ${port}`);
})