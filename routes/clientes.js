const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    const user = req.body.nif;
    const pass = req.body.pass;
    
    if (user == '12345678A' && pass == 'user1234') res.render('index');
    else res.render('login', {error: true});
});

module.exports = router;
