var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
})

con.connect((err) => {
    err ? console.log("not connected") : console.log("connected")
})