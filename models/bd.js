var mysql = require('mysql2/promise');
var util = require('util');
var dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

var pool = mysql.createPool({

connectionLimit: 10,
port: "3306",
host: process.env.MYSQLDB_HOST,
user: process.env.MYSQLDB_USER,
password: process.env.MYSQLDB_PASSWORD,
database: process.env.MYSQLDB_DATABASE,


});


// Imprimir un mensaje en la consola cuando la conexión esté establecida
pool.on('connection', () => {
  console.log('DB Connected!');
});

module.exports = pool;