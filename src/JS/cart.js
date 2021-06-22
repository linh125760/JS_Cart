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
  }

  showAlertAdd()

  localStorage.setItem("cart", JSON.stringify(storage));
};

const cartEmpty = () => {
  document.querySelector("table").style.display = "none";
  document.querySelector(".btn-custom").style.display = "none";
  document.getElementById("noCart").innerHTML = `
    <div class="d-flex justify-content-center">
      <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png"/>
    </div>
    <p class="text-center mt-4">Không có sản phẩm nào trong giỏ hàng của bạn</p>
    <a class="d-flex justify-content-center btn-custom pt-2 pb-2" href="product.html">Tiếp tục mua sắm nào ^^</a>
  `;
};

const showCart = () => {
  let storage = JSON.parse(localStorage.getItem("cart")) || [];
  let cartBody = document.querySelector("#cart-body");
  var render = "";

  if (storage.length === 0) {
    render += cartEmpty();
  } else {
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
  
              <input type="number" id="myNumber" min="1" oninput="validity.valid||(value='');" onchange="changeNumber(this.value, ${
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
  }
  cartBody.innerHTML = render;
};

if (storage != 0) {
  showCart();
} else {
  cartEmpty();
}

const remove = (id) => {
  let storage = JSON.parse(localStorage.getItem("cart"));

  if (confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng ???")) {
    storage = storage.filter((item) => item.id != id);
    showAlertDelete()
  }

  localStorage.setItem("cart", JSON.stringify(storage));
  showCart(storage);
};

const changeNumber = (value, id) => {
  let storage = JSON.parse(localStorage.getItem("cart"));

  const indexCart = storage.findIndex((cart) => cart.id === id);
  storage[indexCart].quantity = value;

  localStorage.setItem("cart", JSON.stringify(storage));
  showCart(storage);
};

function showAlertAdd() {
  var a = document.querySelector(".addSuccess");
  a.style.right = "0px";
  a.style.transition = ".5s";
  setTimeout(() => {
    a.style.right = "-500px";
  }, 1500);
}

const showAlertDelete = () => {
  var a = document.querySelector(".deleteSuccess");
  a.style.right = "0px";
  a.style.transition = ".5s";
  setTimeout(() => {
    a.style.right = "-500px";
  }, 1500);
}
