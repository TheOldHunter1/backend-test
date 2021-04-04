const mysql = require('mysql');
const { MYSQLhost, MYSQLport, MYSQLpwd, MYSQLuser, MYSQLdb } = process.env

class DB {

    constructor() {
        this.con = mysql.createConnection({
            host: MYSQLhost,
            port: MYSQLport,
            user: MYSQLuser,
            password: MYSQLpwd

        });
        this.con.connect();
        this.con.query(`CREATE DATABASE ${MYSQLdb}; `, (err, result, fields) => {
            if (err) { console.log(err.sqlMessage); }
        })
        this.con.query(`use schemaEnviame;`);
        this.con.query('CREATE TABLE `empresa` (`idempresa` int(11) NOT NULL AUTO_INCREMENT,`name` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL, PRIMARY KEY (`idempresa`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;');

    }

}

module.exports = DB;