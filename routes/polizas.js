const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('polizas');
});

router.get('/:(([P])([0-9]{8}))', (req, res) => {
    res.render('poliza');
});

module.exports = router;