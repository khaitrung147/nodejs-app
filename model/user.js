var db = require("./database"); //chèn model database vào catalogs

var bcrypt = require("bcrypt");
var data = []; //biến chứa dữ liệu database đổ về

exports.getAll = async() => {
    //Xuất toàn bộ loại sản phẩm
    sql = `select * from customer`;
    await db.query(sql, (err, result) => {
        if (err) throw err;
        data = result; //Dữ liệu được trả về
        console.log("Xuất toàn bộ người dùng thành công !");
    });
    return data;
};

exports.update = (id_loaisp, ten_loaisp, an_hien, thu_tu) => {
    //Cập nhật loại sản phẩm theo mã
    sql = `update catalog set ten_loaisp='${ten_loaisp}', an_hien='${an_hien}', thu_tu='${thu_tu}' where id_loaisp='${id_loaisp}'`;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log("Cập nhật thành công loại sản phẩm có mã " + id_loaisp);
    });
};

exports.add = async(data) => {
    // Thêm loại sản phẩm mới có mã tự động tạo
    sql = `insert into customer set ?`;
    await db.query(sql, data, (err) => {
        if (err) throw err;
        console.log("Thêm thành công người dùng mới");
    });
};

exports.delete = (id_loaisp) => {
    // Xóa loại sản phẩm theo mã
    sql = `Delete from catalog where id_loaisp='${id_loaisp}'`;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log("Xóa thành công loại sản phẩm có mã: " + id_loaisp);
    });
};

exports.dangnhap = (email, matkhau) => {
    return new Promise((resovle, reject) => {
        let sql = `Select * from customer where email='${email}'`;
        db.query(sql, (err, d) => {
            if (err) throw err;
            if (d.length <= 0) {
                data = false;
                console.log("Sai email");
            } else {
                d.forEach((e) => {
                    var kq = bcrypt.compareSync(matkhau, e.matkhau);
                    if (kq) {
                        data = d;
                    } else {
                        console.log("Sai mật khẩu");
                        data = false;
                    }
                });
            }
            resovle(data);
        });
    });
};

exports.dangky = (ho_khachhang, ten_khachhang, email, sdt, pass_mahoa) => {
    return new Promise((resovle, reject) => {
        let sql = `insert into customer set ho_khachhang='${ho_khachhang}', ten_khachhang='${ten_khachhang}', email='${email}', sdt='${sdt}', matkhau='${pass_mahoa}'`;
        db.query(sql, (err, d) => {
            if (err) throw err;
            console.log("Đăng kí thành công");
            console.log(d);
            resovle(d);
        });
    });
};