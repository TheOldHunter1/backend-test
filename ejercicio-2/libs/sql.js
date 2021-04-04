const DB = require("../models/db");
const format = require('pg-format');

const db = new DB();

const getAll = (page) => {
    return new Promise((resolve, reject) => {
        const sql = `select * from empresa limit ?, 10`;
        db.con.query(sql, page, (err, dummyResult, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(dummyResult);
            }
        });
    });
}

const getOneCompany = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `select * from empresa where idempresa = ?`;
        db.con.query(sql, id, (err, dummyResult, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(dummyResult);
            }
        });
    });
}

const queryInsert = (values) => {
    return new Promise((resolve, reject) => {
        const sql = `insert into empresa(name) values (?)`;
        db.con.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
            return;
            // this.con.end();
        });
    });
}

const queryUpdate = (name, id) => {
    return new Promise((resolve, reject) => {
        const sql = `update empresa set name = ? where idempresa = ?`;
        db.con.query(sql, [name, id], (err, result) => {
            if (err) { reject(err); return; };
            resolve(result.affectedRows);
            return;
        });

    });
}

const queryDelete = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `delete from empresa where idempresa = ?`;
        db.con.query(sql, [id], (err, result) => {
            if (err) { reject(err); return; };
            resolve(result.affectedRows);
            return;
        });
    });
}

const queryFillDB = (values) => {

    const sql = format(`insert into empresa(name) values %L`, values);
    db.con.query(sql, (err, result, fields) => {
        if (err) throw err;

    });
}

module.exports = {
    queryFillDB,
    getAll,
    queryInsert,
    queryUpdate,
    queryDelete,
    getOneCompany
}