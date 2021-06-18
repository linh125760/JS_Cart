// let cart = [];
var storage = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = async (id) => {
  let storage = JSON.parse(localStorage.getItem("cart")) || [];

  const res = await fetch(`http://localhost:3000/products/${id}`);
  const product = await res.json();

  const indexCart = storage.findIndex((cart) => cart.id === id);

  if (indexCart > -1) {
    storage[indexCart] = {
      ...storage[indexCart],
      quantity: storage[indexCart].quantity + 1,
    };
  } else {
    storage.push({ ...product, quantity: 1 });
    console.log(storage);
  }

  alert("Thêm vào giỏ hàng thành công");

  localStorage.setItem("cart", JSON.stringify(storage));
};

const showCart = () => {
  let storage = JSON.parse(localStorage.getItem("cart")) || [];
  let cartBody = document.querySelector("#cart-body");
  var render = "";
  storage.map((item) => {
    return (render += `
     <tr>
      <td>
        <img class="img_product" src="../assets/img/${
          item.img
        }" alt="Cart Image"></td>
      <td> 
       <div class="name_product">${item.name}</div>
      </td>
      <td> 
        <div class="price">${item.price}.000đ</div>
      </td>
      <td> 
        <div class="quantity"> 

            <input type="number" id="myNumber" min="1" onchange="changeNumber(this.value, ${
              item.id
            })" value="${item.quantity}">
          
        </div>
      </td>
      <td> 
        <div class="total">${item.quantity * item.price}.000đ</div>
      </td>
      <td> 
        <div class="remove"><i class="bi bi-trash" onclick="remove(${
          item.id
        })"></i></div>
      </td>
    </tr>
    `);
  });
  cartBody.innerHTML = render;
};

const cartEmpty = () => {
  document.querySelector("table").style.display = "none";
  document.querySelector(".btn-custom").style.display = "none";
  document.getElementById("noCart").innerHTML = `
    <div class="d-flex justify-content-center">
      <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png"/>
    </div>
    <p class="text-center mt-4">Không có sản phẩm nào trong giỏ hàng của bạn</p>
    <a class="d-flex justify-content-center btn-custom pt-2 pb-2" href="index.html">Tiếp tục mua sắm nào ^^</a>
  `;
}
if (storage != 0) {
  showCart();
} else {
  cartEmpty();
}

const remove = (id) => {
  let storage = localStorage.getItem("cart");
  if (storage) {
    cart = JSON.parse(storage);
  }

  if (confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng ???")) {
    // Xóa products to cart
    cart = cart.filter((item) => item.id != id);
    alert("Xóa khỏi giỏ hàng thành công");
    location.reload();
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  showCart(cart);
};

const changeNumber = (value, id) => {
  let storage = localStorage.getItem("cart");
  if (storage) {
    cart = JSON.parse(storage);
  }

  const indexCart = cart.findIndex((cart) => cart.id === id);
  cart[indexCart].quantity = value;

  localStorage.setItem("cart", JSON.stringify(cart));
  showCart(cart);
};
