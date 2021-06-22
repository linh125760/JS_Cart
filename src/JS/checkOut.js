// Check User Login
const checkUser = () => {
  var user = sessionStorage.getItem("user");
  !user ? (location.href = "/login.html") : "";
};
checkUser();

// Show cart
const showCart = () => {
  let storage = JSON.parse(localStorage.getItem("cart")) || [];
  let cartBody = document.querySelector("#here");
  var render = "";
  storage.map((item) => {
    return (render += `
    <div class="detail d-flex justify-content-between align-item-center mb-4">
        <img src="../assets/img/${item.img}" width="10%" />
        <p style="margin: 20px 0">${item.name}</p>
        <p style="margin: 20px 0">${item.quantity} x ${item.price}.000đ</p>
    </div>
      `);
  });
  cartBody.innerHTML = render;
};

showCart();

// Total Price
let storage = JSON.parse(localStorage.getItem("cart")) || [];

// A là giá trị cộng dồn mỗi lần lặp, B là giá trị đầu vào từ mảng (có thể lấy nhiều giá trị). Giá trị ban đầu là 0
const total = storage.reduce((a, b) => {
  return a + Number(b.price) * Number(b.quantity);
}, 0);

const showTotal = () => {
  let cartBody = document.querySelector("#total");
  var render = `
    <div class="d-flex justify-content-between">
      <h3>Total:</h3>
      <h3>${total}.000đ</h3>
    </div>
      `;
  cartBody.innerHTML = render;
};
showTotal();
