const fs = require('fs');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('parte');
});

router.post('/', require('express-formidable')(), (req, res) => {
    const { path, type } = req.files.pdf;
    const name = Math.random().toString(36).substr(2);
    if(type == 'application/pdf') fs.writeFileSync(`./files/${name}.pdf`, fs.readFileSync(path));
    res.render('parte');
});

module.exports = router;
