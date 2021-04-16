const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const polizas = [
        'P12345678',
        'P22325278',
        'P32234272',
        'P42223478',
        'P58888888'
    ];
    res.render('polizas', {items: polizas});
});

router.get('/:id(P[0-9]{8})', (req, res) => {
    res.render('poliza', { id: req.params.id });
});

module.exports = router;