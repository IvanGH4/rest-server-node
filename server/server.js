require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//config global de rutas
app.use(require('./routes/index'));

mongoose.set('useCreateIndex', true);
mongoose
    .connect(process.env.URLDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Base de datos ONLINE'))
    .catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    console.log('Listening port', process.env.PORT);
});
