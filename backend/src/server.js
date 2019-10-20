const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://routine_reader:pgNxPmmEH7dxrEY@routine-4di1x.mongodb.net/test?retryWrites=true&w=majority',{
    // senha: pgNxPmmEH7dxrEY
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(cors());    //Perigo, sem parametros qualquer app pode acessar o backend
app.use(express.json());
app.use(routes);

app.listen(80);