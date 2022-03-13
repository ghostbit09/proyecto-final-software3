CREATE DATABASE amazing_store;

use amazing_store;

--USERS TABLE
CREATE TABLE users(
    id int(10) not null,
    username varchar(16) not null,
    password varchar(60) not null,
    fullname varchar(100) not null
);

CREATE TABLE productos(
    codigo_producto int not null PRIMARY KEY auto_increment,
    nombre varchar(100) not null,
    descripcion varchar(200),
    precio float,
    cantidad int,
    estado boolean
);
