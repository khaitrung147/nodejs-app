var express = require("express");
var router = express.Router();
var modelUser = require("../model/user.js");
var bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function(req, res, next) {
    res.send("respond with a resource");
});

router.get("/dang-ki", (req, res) => {
    let title = "Đăng kí";
    res.render("site/dang-ki", { title: title });
});

router.get("/dang-nhap", (req, res) => {
    let title = "Đăng nhập";
    res.render("site/dang-nhap", { title: title });
});

router.post("/dang-ki", async(req, res) => {
    let ho_khachhang = req.body.ho_khachhang;
    let ten_khachhang = req.body.ten_khachhang;
    let email = req.body.email;
    let sdt = req.body.sdt;
    let matkhau = req.body.matkhau;
    let salt = bcrypt.genSaltSync(10);
    let pass_mahoa = bcrypt.hashSync(matkhau, salt);
    await modelUser.dangky(ho_khachhang, ten_khachhang, email, sdt, pass_mahoa);
    res.redirect("/users/dang-nhap");
});

router.post("/dang-nhap", async(req, res) => {
    let email = req.body.email;
    let matkhau = req.body.matkhau;
    let user = await modelUser.dangnhap(email, matkhau);

    if (user == false) {
        res.redirect("/users/dang-nhap");
    } else {
        res.redirect(`../admin`);
    }
});
module.exports = router;