const express = require('express');
const router = express.Router();

const passport = require('passport');
const {isLoggedIn, isNotLoggedIn} = require('../lib/auth');

//Ruta para renderizar (cargar) el formulario
router.get('/signup', (req, res) => {

    res.render('auth/signup'); //Carga el archivo signup.hbs que esta en la carpeta auth

});

//Ruta para cargar los datos de que se ingresan en el formulario
router.post('/signup', passport.authenticate('local.signup', {

    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true

}));

router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', isNotLoggedIn, (req, res, next) => {
    
    passport.authenticate('local.signin', {

        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true

    })(req, res, next);
})

router.get('/profile', isLoggedIn, (req, res) => {

    res.render('profile');

});

router.get('/logout', isLoggedIn, (req, res) => {
    req.logOut();
    res.redirect('/signin');
});

module.exports = router;