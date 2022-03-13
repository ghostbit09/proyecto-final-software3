CREATE DATABASE amazing_store;

use amazing_store;

--USERS TABLE
CREATE TABLE usuarios(
    cedula int(10) not null PRIMARY KEY,
    nombre varchar(100) not null,
    apellido varchar (100) not null,
    email varchar (100) not null,
    username varchar(16) not null,
    password varchar(60) not null,
    saldo float not null,
    codigo_direccion int
);

CREATE TABLE productos(
    codigo_producto int not null PRIMARY KEY auto_increment,
    nombre varchar(100) not null,
    descripcion varchar(200),
    precio float,
    cantidad int,
    estado boolean
);
