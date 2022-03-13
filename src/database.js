const mysql = require('mysql');

const {promisify} = require('util');

const {database} = require('./keys'); //toma una parte del objeto keys, toma la propiedad database

const pool = mysql.createPool(database); //crea la conexion con la base de datos

pool.getConnection((err, connection) => {

    //Si ocurre un error, entonces...
    if(err){

        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('La conexion con la base de datos fue cerrada');
        }

        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('La base de datos tiene muchas conexiones');
        }

        if(err.code === 'ECONNREFUSED'){
            console.error('La conexion a la base de datos fue rechazada');
        }

    }

    if(connection) connection.release();
    console.log('Conectado a la BD');
    return;

}); //iniciamos la conexion

//Convertimos callbacks a promesas para usar el await y el async
pool.query = promisify(pool.query);

module.exports = pool;