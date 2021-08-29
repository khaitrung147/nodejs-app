var db = require("./database"); //chèn model database vào catalogs

var data = []; //biến chứa dữ liệu database đổ về

exports.getAll = () => {
    return new Promise((resovle, reject) => {
        let sql = `select * from catalog order by thu_tu`;
        db.query(sql, (err, d) => {
            resovle(d);
        });
    });
};

exports.getDetail = (id) => {
    return new Promise((resovle, reject) => {
        let sql = `select * from catalog where id_loaisp='${id}'`;
        db.query(sql, (err, d) => {
            resovle(d);
        });
    });
};

exports.update = (data) => {
    return new Promise((resovle, reject) => {
        let sql = `update catalog set ten_loaisp='${data.ten_loaisp}', an_hien='${data.an_hien}', thu_tu='${data.thu_tu}' where id_loaisp='${data.id_loaisp}'`;
        db.query(sql, (err, d) => {
            resovle(d);
        });
    });
};

exports.add = (data) => {
    return new Promise((resovle, reject) => {
        let sql = `insert into catalog set ?`;
        db.query(sql, data, (err, d) => {
            resovle(d);
        });
    });
};

exports.delete = (id_loaisp) => {
    return new Promise((resovle, reject) => {
        let sql = `Delete from catalog where id_loaisp='${id_loaisp}'`;
        db.query(sql, (err, d) => {});
    });
};