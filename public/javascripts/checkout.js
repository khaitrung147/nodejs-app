var cart_items = JSON.parse(sessionStorage.cart_items);
var total = 0;
cart_items.forEach((e, i) => {
    var id = e.id_sanpham;
    var quantity = e.soluong;
    document.querySelector("#index").innerHTML = i + 1;
    axios.get(`/products/detailProduct/${id}`).then((res) => {
        let data = res.data;
        data.forEach((e) => {
            var str = `
                            <tr>
                                <td>${e.ten_sanpham}</td>
                                <td>${quantity}</td>
                                <td>${e.gia_sanpham * quantity}</td>
                            </tr>
              `;
            total += e.gia_sanpham * quantity;
            document.querySelector("#cart").innerHTML += str;
            document.querySelector("#total").innerHTML =
                total +
                `<input id="thanh_tien" type="number" hidden readonly value="${total}">`;
        });
    });
});

document.querySelector("#btn").addEventListener("click", () => {
    var ten_nguoinhan = document.querySelector("#ten_nguoinhan");
    var sdt = document.querySelector("#sdt");
    var dia_chi = document.querySelector("#dia_chi");
    var thanh_tien = document.querySelector("#thanh_tien");

    var i;
    i = true;

    function removeAscent(str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        return str;
    }

    function valid_name(str) {
        var re = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g; // regex here
        return re.test(removeAscent(str));
    }

    function valid_phone(str) {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        return vnf_regex.test(str);
    }
    if (!ten_nguoinhan.value) {
        document.querySelector("#vali_name").innerHTML = "Bạn chưa nhập tên";
        document.getElementById("vali_name").style.display = "block";
        i = false;
        // } else if (valid_name(ten_nguoinhan.value) == false) {
        //     document.querySelector("#vali_name").innerHTML =
        //         "Vui lòng nhập đúng định dạng tên";
        //     document.getElementById("vali_name").style.display = "block";
        //     i = false;
    } else {
        document.getElementById("vali_name").style.display = "none";
    }

    if (!sdt.value) {
        document.querySelector("#vali_phone").innerHTML = "Bạn chưa nhập sdt";
        document.getElementById("vali_phone").style.display = "block";
        i = false;
    } else if (valid_phone(sdt.value) == false) {
        document.querySelector("#vali_phone").innerHTML =
            "Vui lòng nhập đúng định dạng sđt";
        document.getElementById("vali_phone").style.display = "block";
        i = false;
    } else {
        document.getElementById("vali_phone").style.display = "none";
    }

    if (!dia_chi.value) {
        document.querySelector("#vali_add").innerHTML = "Bạn chưa nhập địa chỉ";
        document.getElementById("vali_add").style.display = "block";
        i = false;
    } else {
        document.getElementById("vali_add").style.display = "none";
    }

    if (i == true) {
        if (confirm("Xác nhận đơn hàng của bạn !") == true) {
            var data = {
                ten_nguoinhan: ten_nguoinhan.value,
                sdt: sdt.value,
                dia_chi: dia_chi.value,
                thanh_tien: thanh_tien.value,
            };
            axios
                .post("/checkout", data)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            var cart_items = JSON.parse(sessionStorage.cart_items);
            cart_items.forEach((e) => {
                let data = {
                    id_sanpham: e.id_sanpham,
                    soluong: e.soluong,
                };
                axios
                    .post("/checkout/add_detail", data)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
            alert("Thanh toán thành công !");
            window.sessionStorage.removeItem("cart_items");
        } else {
            alert("Đơn hàng không thành công !");
        }
        window.location.href = "http://localhost:3000/gio-hang";
    }
});