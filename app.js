const path = require('path');

const express = require('express');
const app = express();

const PORT = 8080;

app.engine('pug', require('pug').__express)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/presuoueto', (req, res) => {
    res.render('presupuesto');
});

app.get('/info', (req, res) => {
    res.render('info');
});

app.get('/polizas:(([P])([0-9]{8}))', (req, res) => {
    res.render('polizas');
});

app.get('/partes', (req, res) => {
    res.render('partes');
});

app.get('/clientes/login', (req, res) => {
    res.render('login');
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});