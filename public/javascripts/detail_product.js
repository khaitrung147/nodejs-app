var id = document.querySelector("#id").value;
console.log(id);

axios.get(`/products/detailProduct/${id}`).then((res) => {
    let data = res.data;
    console.log(data);
    data.forEach((e) => {
        document.querySelector(
            "#img"
        ).innerHTML = `<img src="${e.hinh_sanpham}" alt="" />`;
        document.querySelector("#name").innerHTML = `${e.ten_sanpham}`;
        document.querySelector("#price").innerHTML = `${e.gia_sanpham}`;
    });
});

function add_to_cart() {
    let quantity = 1;
    if (!sessionStorage.cart_items) {
        var items = [];
    } else {
        items = JSON.parse(sessionStorage.cart_items);
    }

    let i = { id_sanpham: id, soluong: quantity };
    items.push(i);
    window.sessionStorage.cart_items = JSON.stringify(items);
}