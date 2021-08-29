var express = require("express");
var router = express.Router();
var modelOrders = require("../model/orders.js");
var model_detailOrders = require("../model/detail_orders.js");

//Catalogs
router.get("/", async function(req, res, next) {
    //Trang danh sách đơn hàng
    var list = await modelOrders.getAll();
    res.json(list);
});

router.get("/:id", async function(req, res, next) {
    //Trang danh sách chi tiết đơn hàng
    var id = req.params.id;
    var list = await model_detailOrders.getbyId(id);
    res.json(list);
});
// router.get("/detailCatalogs/:id", async(req, res) => {
//     var id = req.params.id;
//     var list = await modelCatalogs.getDetail(id);
//     res.json(list);
// });

router.post("/", async(req, res) => {
    let data = req.body;
    await modelOrders.add(data);
});

router.delete("/:id", async(req, res) => {
    let id = req.params.id;
    await modelOrders.delete(id);
});

router.post("/add_detail", async(req, res) => {
    let id_sanpham = req.body.id_sanpham;
    let soluong = req.body.soluong;
    await modelOrders.addDetail(id_sanpham, soluong);
});

//*products

module.exports = router;