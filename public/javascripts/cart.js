if (!sessionStorage.cart_items) {
    document.querySelector("#cart").innerHTML =
        "<i>Bạn chưa thêm sản phẩm nào vào giỏ hàng</i>";

    document.querySelector("#total_price").innerHTML = "0";
    var checkout_btn = document.getElementById("checkout");
    checkout_btn.style.display = "none";
} else {
    var cart_items = JSON.parse(sessionStorage.cart_items);
    var total = 0;
    cart_items.forEach((e) => {
        var id = e.id_sanpham;
        var quantity = e.soluong;

        axios.get(`/products/detailProduct/${id}`).then((res) => {
            let data = res.data;
            data.forEach((e) => {
                var str = `
                <div class="cart_item">
                        <img src="${e.hinh_sanpham}" alt="" />
                        <p>
                            <span>${e.ten_sanpham}</span><br />
                            <span class="price">${e.gia_sanpham}
                             vnđ</span>
                             <input type="text" value="${
                               e.gia_sanpham
                             }" hidden id="price_${e.id_sanpham}" >
                        </p>
                            <form action="" method="post">
                                <input value="-" type="button" onclick="minus(${
                                  e.id_sanpham
                                })">
                                <input readonly id="input_qtt_${
                                  e.id_sanpham
                                }" type="number" value="${quantity}" />
                                <input value="+" type="button" onclick="plus(${
                                  e.id_sanpham
                                })">
                            </form>
                        <span class="price"><span id="total_items_${
                          e.id_sanpham
                        }">${quantity * e.gia_sanpham}</span>  vnđ</span>
                            <a href="" type="submit" onclick="delete_items(${
                              e.id_sanpham
                            })"><i
                  class="fas fa-times-circle"
                  style="color: rgb(90, 90, 90)"
                ></i
              ></a>
            </div>
              `;
                total += e.gia_sanpham * quantity;
                document.querySelector("#cart").innerHTML += str;

                document.querySelector("#total_price").innerHTML = total;
                document.querySelector("#total").value = total;
            });
        });
    });
}

function delete_items(id) {
    let cart_items = JSON.parse(sessionStorage.cart_items);

    if (cart_items.length <= 1) {
        window.sessionStorage.removeItem("cart_items");
    } else {
        cart_items.forEach((e, i) => {
            if (e.id_sanpham == id) {
                cart_items.splice(i, 1);
                window.sessionStorage.cart_items = JSON.stringify(cart_items);
            }
        });
    }
}

function update_price_minus(id) {
    var soluong = document.querySelector(`#input_qtt_${id}`).value;
    var giatien = document.querySelector(`#price_${id}`).value;
    var thanhtien = document.querySelector(`#total_items_${id}`);
    var tongtiencu = document.querySelector("#total").value;
    var tongtienmoi = document.querySelector("#total_price");

    thanhtien.innerHTML = Number(soluong) * Number(giatien);
    tongtienmoi.innerHTML = Number(tongtiencu) - Number(giatien);
    document.querySelector("#total").value = Number(tongtiencu) - Number(giatien);
}

function update_price_plus(id) {
    var soluong = document.querySelector(`#input_qtt_${id}`).value;
    var giatien = document.querySelector(`#price_${id}`).value;
    var thanhtien = document.querySelector(`#total_items_${id}`);
    var tongtiencu = document.querySelector("#total").value;
    var tongtienmoi = document.querySelector("#total_price");

    thanhtien.innerHTML = Number(soluong) * Number(giatien);
    tongtienmoi.innerHTML = Number(tongtiencu) + Number(giatien);
    document.querySelector("#total").value = Number(tongtiencu) + Number(giatien);
}

function minus(id) {
    var cart_items = JSON.parse(sessionStorage.cart_items);
    cart_items.forEach((e) => {
        if (e.id_sanpham == id) {
            if (e.soluong > 1) {
                e.soluong--;
                document.querySelector(`#input_qtt_${id}`).value = e.soluong;
                update_price_minus(id);
            }
        }
    });
    sessionStorage.cart_items = JSON.stringify(cart_items);
}

function plus(id) {
    var cart_items = JSON.parse(sessionStorage.cart_items);
    cart_items.forEach((e) => {
        if (e.id_sanpham == id) {
            e.soluong++;
            document.querySelector(`#input_qtt_${id}`).value = e.soluong;
            update_price_plus(id);
        }
    });
    sessionStorage.cart_items = JSON.stringify(cart_items);
}