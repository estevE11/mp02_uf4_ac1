const path = require('path');

const express = require('express');
const app = express();

const PORT = 8080;

app.engine('pug', require('pug').__express)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use('/polizas', require('./routes/polizas'));
app.use('/partes', require('./routes/partes'));
app.use('/clientes', require('./routes/clientes'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/presupuesto', (req, res) => {
    res.render('presupuesto');
});

app.get('/info', (req, res) => {
    res.render('info');
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});