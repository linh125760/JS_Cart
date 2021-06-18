var fname = document.getElementById("lName");
var home = document.getElementById("home");
var city = document.getElementById("city");
var zip = document.getElementById("zip");
var input = document.querySelectorAll("input");
var phone = document.getElementById("phone");

var form = document.querySelector("#address");

const checkOut = (e) => {
  e.preventDefault();
  if (
    fname.value &&
    home.value &&
    city.value &&
    zip.value &&
    phone.value != ""
  ) {
    localStorage.removeItem("cart");
    alert("Thanh toán thành công");
    window.location.href = "index.html";
  } else {
    if (fname.value == "") {
      fname.nextElementSibling.textContent = "Bạn chưa nhập thông tin";
      setTimeout(() => {
        fname.nextElementSibling.textContent = "";
      }, 1500);
    }
    if (home.value == "") {
      home.nextElementSibling.textContent = "Bạn chưa nhập địa chỉ";
      setTimeout(() => {
        home.nextElementSibling.textContent = "";
      }, 1500);
    }
    if (city.value == "") {
      city.nextElementSibling.textContent = "Bạn chưa nhập thông tin";
      setTimeout(() => {
        city.nextElementSibling.textContent = "";
      }, 1500);
    }
    if (zip.value == "") {
      zip.nextElementSibling.textContent = "Bạn chưa nhập mã vùng";
      setTimeout(() => {
        zip.nextElementSibling.textContent = "";
      }, 1500);
    }
    if (phone.value == "") {
      phone.nextElementSibling.textContent = "Bạn chưa nhập số điện thoại";
      setTimeout(() => {
        phone.nextElementSibling.textContent = "";
      }, 1500);
    }
  }
};

form.addEventListener("submit", (e) => {
  checkOut(e);
});
