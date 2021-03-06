const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //find out what it does
const morgan = require('morgan'); //logs which device etc hit the request

const config = require('./configeration/config');
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors()); //DO RESEACH ON THIS.... 29:42 on first video

app.post('/register', (req, res) => {
    res.send(`Hello ${req.body.email}, User was registered`);
});

app.listen(config.port, () =>{
    console.log('Server started on port: '+ config.port)
});