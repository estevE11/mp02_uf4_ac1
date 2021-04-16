const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('polizas');
});

router.get('/:id(P[0-9]{8})', (req, res) => {
    res.render('poliza', { id: req.params.id });
});

module.exports = router;