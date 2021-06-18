// Check User Login
const checkUser = () => {
    var user = sessionStorage.getItem("user");
    !user ?(location.href = "/login.html") : "";
  };
  checkUser();
  
// Show cart
const showCart = () => {
  let storage = JSON.parse(localStorage.getItem("cart")) || [];
  let cartBody = document.querySelector("#here");
  var render = "";
  storage.map((item) => {
    return (render += `
    <div class="detail d-flex justify-content-between">
        <p>${item.name} </p>
        <p>${item.quantity} x ${item.price}.000đ</p>
    </div>
      `);
  });
  cartBody.innerHTML = render;
};

showCart();
