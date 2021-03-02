const express = require('express');
const path = require('path');
const members = require('./Members.js');
const logger = require('./middleware/logger.js')

const app = express();
const PORT = process.env.PORT || 5000;


app.use(logger);

//Pega todos os membros.
app.get('/api/members', (req, res)=>{
    res.json(members);
});

//Definindo folders estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log('Server started on port: ' + PORT);
});