require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Hello world');
});

app.get('/usuario', (req, res) => {
    res.json('Usuario!');
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    if(body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            body
        });
    }

});

app.put('/usuario/:id', (req, res) => {
    
    let id = req.params.id;
    
    res.json(`usuario con el id ${id}`);
});

app.delete('/usuario', (req, res) => {
    res.json('delete a Usuario!');
});

app.listen(process.env.PORT, () => {
    console.log('Listening port', process.env.PORT);
});