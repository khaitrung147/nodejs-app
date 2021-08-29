var db = require("./database"); //chèn model database vào orderss

var data = []; //biến chứa dữ liệu database đổ về

exports.getAll = () => {
    //Xuất toàn bộ loại sản phẩm
    return new Promise((resovle, reject) => {
        let sql = `select * from orders `;
        db.query(sql, data, (err, d) => {
            resovle(d);
        });
    });
};

exports.update = (id_loaisp, ten_loaisp, an_hien, thu_tu) => {
    //Cập nhật loại sản phẩm theo mã
    sql = `update orders set ten_loaisp='${ten_loaisp}', an_hien='${an_hien}', thu_tu='${thu_tu}' where id_loaisp='${id_loaisp}'`;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log("Cập nhật thành công loại sản phẩm có mã " + id_loaisp);
    });
};

exports.add = (data) => {
    // console.log(data);
    // Thêm loại sản phẩm mới có mã tự động tạo
    return new Promise((resovle, reject) => {
        let sql = `insert into orders set ?`;
        db.query(sql, data, (err, d) => {
            resovle(d);
        });
    });
};

exports.addDetail = (id_sanpham, soluong) => {
    // console.log(data);
    // Thêm loại sản phẩm mới có mã tự động tạo
    return new Promise((resovle, reject) => {
        let sql1 = `SET @last_id = LAST_INSERT_ID()`;
        db.query(sql1, (err, d) => {
            resovle(d);
        });
        let sql2 = `insert into detail_order (id_donhang, id_sanpham, soluong) values(@last_id,'${id_sanpham}','${soluong}')`;
        db.query(sql2, (err, d) => {
            resovle(d);
        });
    });
};

exports.delete = (id) => {
    // Xóa loại sản phẩm theo mã
    return new Promise((resovle, reject) => {
        sql = `DELETE FROM orders WHERE id_donhang=${id}`;
        db.query(sql, data, (err, d) => {});
    });
};