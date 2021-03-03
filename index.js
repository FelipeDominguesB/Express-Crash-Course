const express = require('express');
const path = require('path');
const logger = require('./middleware/logger.js')

const app = express();
const PORT = process.env.PORT || 5000;


//Middleware de bosyparser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Definindo folders estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, ()=>{
    console.log('Server started on port: ' + PORT);
});