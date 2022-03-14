const express = require('express');
const router = express.Router();

//Conexion a la bd
const pool = require('../database');

//Para borrar las imagenes al momento de borrar objetos en la BD
const fs = require('fs');

//Para validar si el usuario esta logeado
const {isLoggedIn} = require('../lib/auth');
const path = require('path');

router.get('/', (req, res) => {
    res.render('products/list');
});

router.get('/add', isLoggedIn, (req, res) => {
    res.render('products/add');
});

//Recibe los datos del formulario
router.post('/add', isLoggedIn, async (req, res) => {

    const {nombre, precio, cantidad, descripcion} = req.body;

    const newProduct = {
        nombre,
        precio, 
        cantidad,
        descripcion,
        estado: true
        //image_name: req.file.filename
    };

    //Se insertan los datos en la BD, await es para procesar esta peticion al tiempo
    //debido a que se hace de manera asincrona
    await pool.query('INSERT INTO productos set ?', [newProduct]);
    req.flash('success', 'Producto guardado exitosamente');
    res.redirect('/products');
});

module.exports = router;