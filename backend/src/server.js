const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoConect = require('./config/mongodbConfig');

const routes = require('./routes');
const app = express();
const door = 8080;


mongoose.connect(mongoConect.url ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());    //Perigo, sem parametros qualquer app pode acessar o backend
app.use(bodyParser.json()); //wtf it does??
app.use(express.json());    //same thing ^ ?
app.use(routes);

app.listen(door);
console.log('server on at the door:', door); 