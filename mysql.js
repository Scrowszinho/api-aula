const mysql = require('mysql2');
var connection = mysql.createPool({
    user: 'root',
    password: '1234',
    database: 'aula',
    host: 'localhost',
    port: 3306
});

module.connection = connection;