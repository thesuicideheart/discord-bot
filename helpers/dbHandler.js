var sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

module.exports.preVerify = (ign, discordname, code) => {
    // var query = `SELECT * FROM user where InGameName = ?`;
    // db.each(query, [ign], (err, row) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(row);
    // });

    // console.log('select from db');
    // console.log(sql);
    // var XD = sql.run(`select * from user where InGameName ='${ign}'`).get();
    // console.log(XD);
    // sql.each(`select * from user where InGameName ='${ign}'`, function (err, row) {
    //     console.log(row);
    //     if (!err) {
    //         // user already found UPDATE VERICODE
    //         console.log(row);
    //         if (row) {
    //             var query = `UPDATE USER SET VerifyCode='${code}' where InGameName='${ign}'`;
    //         } else {
    //             var query = `INSERT INTO USER (InGameName, DiscordName, VerifyCode) VALUES('${ign}','${discordname}','${code}')`;
    //         } sql.run(query), (err) => {
    //             if (err) {
    //                 return console.log(err.message);
    //             }
    //             console.log('inserted');
    //         };
    //     }
    // });
}

module.exports.verify = async () => {

}