const showDetail = () => {
  let storage = JSON.parse(localStorage.getItem("detail")) || [];
  let cartBody = document.querySelector("#here");
  var render = "";
  storage.map((item) => {
    return (render += `
      <div class="d-flex haha justify-content-between">
        <div class="detail">
            <p>${item.name}</p>
        </div>
        <div class="detail">
            <p>${item.quantity}</p>
        </div>
        <div class="detail">
            <p>${item.price}.000đ</p>
        </div>
    </div>
        `);
  });
  cartBody.innerHTML = render;
};

const showInfo = () => {
  let storage = JSON.parse(localStorage.getItem("info")) || [];
  let cartBody = document.querySelector("#info");
  var render = "";
  storage.map((item) => {
    return (render += `
      <div class="text-left">
        <p class="d-flex justify-content-between">Người nhận hàng: <span>${item.name}</span></p>
        <p>Địa chỉ nhận hàng:<span>${item.address}</span></p>
        <p>Tỉnh/Thành phố: <span>${item.city}</span></p>
        <p>Số điện thoại người nhận: <span>${item.phone}</span></p>
        <p>Ngày đặt hàng: <span>${item.date}</span></p>
    </div>
        `);
  });
  cartBody.innerHTML = render;
};

showDetail();
showInfo();
