var db = require("./database"); //chèn model database vào products
let data = [];
exports.getAll = () => {
    return new Promise((resovle, reject) => {
        let sql = `select * from product order by thu_tu`;
        db.query(sql, (err, d) => {
            resovle(d);
        });
    });
};

exports.getDetail = (id) => {
    return new Promise((resovle, reject) => {
        let sql = `select * from product where id_sanpham=${id}`;
        db.query(sql, (err, d) => {
            resovle(d);
        });
    });
};

exports.getbyCata = (id) => {
    return new Promise((resovle, reject) => {
        let sql = `select * from product where id_loaisp=${id}`;
        db.query(sql, (err, d) => {
            resovle(d);
        });
    });
};

exports.getNew = () => {
    return new Promise((resovle, reject) => {
        let sql = `select * from product order by ngayramat desc limit 4`;
        db.query(sql, (err, d) => {
            resovle(d);
        });
    });
};

exports.getHot = () => {
    return new Promise((resovle, reject) => {
        let sql = `select * from product order by view desc limit 4`;
        db.query(sql, (err, d) => {
            resovle(d);
        });
    });
};

exports.update = (data, id) => {
    return new Promise((resovle, reject) => {
        let sql = `update product set ? where id_sanpham=${id}`;
        db.query(sql, data, (err, d) => {});
    });
};

exports.add = (data) => {
    return new Promise((resovle, reject) => {
        let sql = `insert into product set ?`;
        db.query(sql, data, (err, d) => {
            resovle(d);
        });
    });
};

exports.delete = (id_sanpham) => {
    return new Promise((resovle, reject) => {
        let sql = `Delete from product where id_sanpham='${id_sanpham}'`;
        db.query(sql, (err, d) => {});
    });
};