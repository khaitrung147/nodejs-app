var mysql = require("mysql");
var db = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6433476",
    password: "mQRyPJkmsE",
    database: "sql6433476",
});
db.connect((err) => {
    if (err) throw err;
    console.log("Kết nối database thành công!");
});
module.exports = db;