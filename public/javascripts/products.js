var id = document.querySelector("#id").value;
if (id == "all") {
    axios.get("/products").then((res) => {
        let str = "";
        res.data.forEach((e) => {
            str += `
            <a href="/chi-tiet-san-pham/${e.id_sanpham}" class="today-box">
                <div class="img-today">
                    <img class="" src="${e.hinh_sanpham}" alt="" />
                </div>
                <h3>${e.ten_sanpham}</h3>
                <span>Giá: <strong>${e.gia_sanpham}</strong></span>
            </a>
            `;
            document.querySelector("#products").innerHTML = str;
            document.querySelector("#title").innerHTML = "Tất cả sản phẩm";
        });
    });
} else {
    axios
        .all([
            axios.get(`/products/productbyCata/${id}`),
            axios.get(`/catalogs/detailCatalogs/${id}`),
        ])
        .then(
            axios.spread((p1, p2) => {
                let str1 = "";
                let str2 = "";
                //Lặp data sản phẩm hot
                p1.data.forEach((e) => {
                    str1 += `
            <a href="/chi-tiet-san-pham/${e.id_sanpham}" class="today-box">
                <div class="img-today">
                    <img class="" src="${e.hinh_sanpham}" alt="" />
                </div>
                <h3>${e.ten_sanpham}</h3>
                <span>Giá: <strong>${e.gia_sanpham}</strong></span>
            </a>
            `;
                });
                document.querySelector("#products").innerHTML = str1;
                //
                //Lặp data sản phẩm mới
                p2.data.forEach((e) => {
                    str2 = e.ten_loaisp;
                });
                //
                document.querySelector("#title").innerHTML = str2;
            })
        );
}