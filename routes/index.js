var express = require("express");
var router = express.Router();

//trang chủ
router.get("/", (req, res) => {
    let title = "Trang chủ";
    res.render("site/index", { title: title });
});

// trang sản phẩm
router.get("/san-pham", (req, res) => {
    let title = "Sản phẩm";
    let id = "all";
    res.render("site/san-pham", { title: title, id: id });
});

// trang sản phẩm theo loại
router.get("/san-pham/:id", (req, res) => {
    let title = "Sản phẩm theo loại";
    let id = req.params.id;
    res.render("site/san-pham", { title: title, id: id });
});

//trang chi tiết sản phẩm
router.get("/chi-tiet-san-pham/:id", (req, res) => {
    let id = req.params.id;
    let title = "Chi tiết sản phẩm";
    res.render("site/chi-tiet-san-pham", { title: title, id: id });
});

//trang giới thiệu
router.get("/gioi-thieu", (req, res) => {
    let title = "Giới thiệu";
    res.render("site/gioi-thieu", { title: title });
});

//trang giới thiệu
router.get("/gui-mail", (req, res) => {
    let title = "GỬi mail";
    res.render("site/gui-mail", { title: title });
});

router.post("/testsendmail", function(req, res, next) {
    var email = req.body.email;
    var tieude = req.body.title;
    var noidung = req.body.noidung;

    var nodemailer = require("nodemailer");
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: "khaintt9a1@gmail.com", pass: "1412kido" },
        tls: { rejectUnauthorized: false },
    });

    const fs = require("fs");
    var mailOptions = {
        from: "khaintt9a1@gmail.com",
        to: `${email}`,
        subject: `${tieude}`,
        //text: 'Nội dung thư, không có code html'
        html: `${noidung}`,
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) console.log(error);
        else console.log("Đã gửi mail: " + info.response);
        res.render("../");
    });
}); //

//trang đăng nhập
// router.get("/dang-nhap", (req, res) => {
//     let title = "Đăng nhập";
//     res.render("site/dang-nhap", { title: title });
// });

//trang đăng kí
// router.get("/dang-ki", (req, res) => {
//     let title = "Đăng kí";
//     res.render("site/dang-ki", { title: title });
// });

// trang giỏ hàng
router.get("/gio-hang", (req, res) => {
    let title = "Giỏ hàng của bạn";
    res.render("site/gio-hang", { title: title });
});

// trang thanh toán
router.get("/thanh-toan", (req, res) => {
    let title = "Thanh toán đơn hàng";
    res.render("site/thanh-toan", { title: title });
});

module.exports = router;