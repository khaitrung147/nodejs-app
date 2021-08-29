var express = require("express");
var router = express.Router();
var modelProducts = require("../model/products.js");
var modelCatalogs = require("../model/catalogs.js");

//Catalogs
router.get("/", async function(req, res, next) {
    //Trang danh sách loại sản phẩm
    var list = await modelProducts.getAll();
    res.json(list);
});

router.post("/", async function(req, res, next) {
    //Trang thêm loại sản phẩm
    var data = req.body;
    await modelProducts.add(data);
});

router.put("/:id", async function(req, res, next) {
    //Trang thêm loại sản phẩm
    var id = req.params.id;
    var data = req.body;
    await modelProducts.update(data, id);
});

router.delete("/delete/:id", async function(req, res, next) {
    //Trang xóa loại sản phẩm
    var id_sanpham = req.params.id;
    await modelProducts.delete(id_sanpham);
});

router.get("/detailProduct/:id", async(req, res) => {
    var id = req.params.id;
    var list = await modelProducts.getDetail(id);
    res.json(list);
});

router.get("/productbyCata/:id", async(req, res) => {
    var id = req.params.id;
    var list = await modelProducts.getbyCata(id);
    res.json(list);
});

router.get("/productNew", async(req, res) => {
    var list = await modelProducts.getNew();
    res.json(list);
});

router.get("/productHot", async(req, res) => {
    var list = await modelProducts.getHot();
    res.json(list);
});

//*products

module.exports = router;