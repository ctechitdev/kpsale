
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kpsale"
});

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

module.exports = con;
