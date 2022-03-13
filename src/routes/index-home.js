const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;