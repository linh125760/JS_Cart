// const fetchProducts = async () => {}
async function fetchTag() {
  var tag = "http://localhost:3000/tag";
  fetch(tag)
    .then((res) => res.json())
    .then(function (tag) {
      showTag(tag);
    });
}

async function fetchCategory() {
  var category = "http://localhost:3000/category";
  fetch(category)
    .then((res) => res.json())
    .then(function (category) {
      showCategory(category);
    });
}

function showTag(data) {
  document.getElementById("tag").innerHTML = `
    ${data.map(tagItem).join("")}
  `;
}

function showCategory(data) {
  document.getElementById("cate").innerHTML = `
    ${data.map(categoryItem).join("")}
  `;
}

function showProducts(data) {
  document.getElementById("add").innerHTML = `
    ${data.map(productItemGridView).join("")}
  `;
  document.getElementById("add1").innerHTML = `
    ${data.map(productItemListView).join("")}
  `;
}

function tagItem(tag) {
  return `        
  <a class="tag" id="${tag.id}" onclick="getTag(${tag.id})">${tag.tagName}</a>
`;
}
function productItemGridView(product) {
  return `
    <div class="item-product col-md-4 mt-5 text-center">
      <img src="../assets/img/${product.img}" alt="product Image">
      <h3 class="name">${product.name}</h3>
      <div class="d-flex justify-content-center">
        <h4 class="price">${product.price}.000đ </h4>
        <h4 class="old-price">${product.old_price}.000đ</h4>
      </div>
      <button class="btn-custom" data-id="${product.id}" onclick="addToCart(${product.id})">Add to cart </button>
    </div>
  `;
}

function productItemListView(product) {
  return `
    <div class="row grid">
      <div class="col-md-4"> <img src="../assets/img/${product.img}" alt="product Image" /></div>
      <div class="col-md-8">
        <h3 class="name">${product.name}</h3>
        <h3 class="price">${product.price}.000đ</h3>
        <p class="detail">${product.detail}</p>
        <div class="d-flex">
          <div class="action-items"><a class="btn-custom" data-id="${product.id}" onclick="addToCart(${product.id})">ADD TO CART </a></div>
          <div class="action-items"><i class="bi bi-heart-fill">Yêu thích</i></div>
          <div class="action-items"><i class="bi bi-reception-4">So sánh</i></div>
        </div>
      </div>
    </div>
    <hr />
  `;
}

function categoryItem(category) {
  return `        
  <ul>
    <li><a data-id="${category.id}" class="cate" onclick="getIdCate(${category.id})")> ${category.name}<span> (${category.quantity})</span></a></li>
  </ul>
`;
}

// IIFE (Hàm tự chạy)
(async () => {
  await fetchProducts();
  await fetchCategory();
  await fetchTag();
})();
