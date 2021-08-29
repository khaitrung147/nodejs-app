var express = require("express");
var router = express.Router();
var modelCatalogs = require("../model/catalogs.js");

//Catalogs
router.get("/", async function(req, res, next) {
    //Trang danh sách loại sản phẩm
    var list = await modelCatalogs.getAll();
    res.json(list);
});

router.post("/", async function(req, res, next) {
    //Trang thêm loại sản phẩm
    var data = req.body;
    await modelCatalogs.add(data);
});

router.put("/", async function(req, res, next) {
    //Trang thêm loại sản phẩm
    var data = req.body;
    await modelCatalogs.update(data);
});

router.delete("/delete/:id", async function(req, res, next) {
    //Trang xóa loại sản phẩm
    var id_loaisp = req.params.id;
    console.log(id_loaisp);
    await modelCatalogs.delete(id_loaisp);
});

router.get("/detailCatalogs/:id", async(req, res) => {
    var id = req.params.id;
    var list = await modelCatalogs.getDetail(id);
    res.json(list);
});

//*products

module.exports = router;