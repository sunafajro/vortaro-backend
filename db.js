var mysql = require('mysql');

var pool      =    mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'vortaro',
    debug    :  false
});

module.exports = pool;