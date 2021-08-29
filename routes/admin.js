var express = require("express");
var router = express.Router();
var modelCatalog = require("../model/catalogs.js");

router.get("/", function(req, res, next) {
    //Trang chủ dashboard
    res.render("admin/index");
});

//Catalogs
router.get("/loai-san-pham", function(req, res, next) {
    //Trang danh sách loại sản phẩm

    res.render("admin/catalogs");
});

router.get("/loai-san-pham/them-moi", (req, res) => {
    //Trang thêm loại sản phẩm
    res.render("admin/add_catalogs");
});

//*catalogs

//Products
router.get("/san-pham", function(req, res, next) {
    //Trang danh sách loại sản phẩm

    res.render("admin/products");
});

router.get("/san-pham/them-moi", (req, res) => {
    //Trang thêm loại sản phẩm
    res.render("admin/add_products");
});

//Orders
router.get("/don-hang", function(req, res, next) {
    //Trang danh sách loại sản phẩm

    res.render("admin/order");
});

//chart
router.get("/thong-ke/top-4-quan-tam", function(req, res, next) {
    //Trang danh sách loại sản phẩm

    res.render("admin/top4");
});

module.exports = router;