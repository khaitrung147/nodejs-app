var db = require("./database"); //chèn model database vào detail_orders

var data = []; //biến chứa dữ liệu database đổ về

exports.getbyId = (id) => {
    //Xuất toàn bộ loại sản phẩm
    return new Promise((resovle, reject) => {
        let sql = `select * from detail_order where id_donhang=${id} `;
        db.query(sql, data, (err, d) => {
            resovle(d);
        });
    });
};