const path = require('path');

const express = require('express');
const { slategray } = require('color-name');
const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded());

app.engine('pug', require('pug').__express)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(require('express-formidable')());

app.use('/polizas', require('./routes/polizas'));
app.use('/partes', require('./routes/partes'));
app.use('/clientes', require('./routes/clientes'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/presupuesto', (req, res) => {
    const values = req.body;
    console.log(values);
    let val = (values.potencia * 6) - (values.edad > 28 && values.edad < 50 ? 100 : 0) - (values.sexo == 'M' ? 25 : 0);
    
    if (values.experiencia > 25) val -= 200;
    else if (values.experiencia > 10) val -= 100;

    if (values.partes <= 1) val -= 50;
    else if (values.partes <= 3) val -= 25;

    if (values.km < 25000) val -= 25;

    if (values.garage != 'N') val -= 100;

    
    res.render('presupuesto', { val: val });
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