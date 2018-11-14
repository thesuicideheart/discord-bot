/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./test.db');

/* Init car and driver tables if they don't exist */
let init = function () {

    db.run(`CREATE TABLE if not exists Users ( 
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        Level Integer, 
        Exp Integer,
        ExpRemaining Integer,
        Gold Integer,
        Prefix varchar,
        DiscordId Integer,
        WorkId Integer
     );`
    );

    db.run(`CREATE TABLE if not exists Work(
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        Name Varchar,
        Description Varchar,
        MoneyPerWork Integer   
     );`
    );

};

module.exports = {
    init: init,
    db: db
};