const fname = document.getElementById("lName");
const home = document.getElementById("home");
const city = document.getElementById("city");
const zip = document.getElementById("zip");
const input = document.querySelectorAll("input");
const phone = document.getElementById("phone");

const form = document.querySelector("#address");
var today = new Date();
var date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " / " + today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
const checkOut = (e) => {
  e.preventDefault();
  if (
    fname.value &&
    home.value &&
    city.value &&
    zip.value &&
    phone.value !== false
  ) {
    let storage = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem("detail", JSON.stringify(storage));
    var info = [
      {
        name: fname.value,
        address: home.value,
        city: city.value,
        phone: phone.value,
        date: date,
      },
    ];
    localStorage.setItem("info", JSON.stringify(info));
    localStorage.removeItem("cart");
    window.location.href = "order_detail.html";
  } else {
    if (fname.value.length < 5 || fname.value == "") {
      fname.nextElementSibling.textContent = "Thông tin không hợp lệ";
      setTimeout(() => {
        fname.nextElementSibling.textContent = "";
      }, 1500);
    }
    if (home.value == "" || home.value.length < 15) {
      home.nextElementSibling.textContent = "Địa chỉ không hợp lệ";
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
    if (
      phone.value == "" ||
      phone.value.length < 10 ||
      phone.value.length > 10
    ) {
      phone.nextElementSibling.textContent = "Số điện thoại không hợp lệ";
      setTimeout(() => {
        phone.nextElementSibling.textContent = "";
      }, 1500);
    }
  }
};

form.addEventListener("submit", (e) => {
  checkOut(e);
});
