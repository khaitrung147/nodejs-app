axios
    .all([axios.get("/products/productHot"), axios.get("/products/productNew")])
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
            //
            //Lặp data sản phẩm mới
            p2.data.forEach((e) => {
                str2 += `
                <a href="/chi-tiet-san-pham/${e.id_sanpham}" class="today-box">
                <div class="img-today">
                    <img class="" src="${e.hinh_sanpham}" alt="" />
                </div>
                <h3>${e.ten_sanpham}</h3>
                <span>Giá: <strong>${e.gia_sanpham}</strong></span>
            </a>
                `;
            });
            //
            document.querySelector("#productHot").innerHTML = str1;
            document.querySelector("#productNew").innerHTML = str2;
        })
    );