var user = "http://localhost:3000/users";

if (!localStorage.getItem("user")) {
  fetch(user)
    .then((res) => res.json())
    .then(function (users) {
      localStorage.setItem("user", JSON.stringify(users)); //store user
    });
}

var getUser = JSON.parse(localStorage.getItem("user"));
var txtEmail = document.getElementById("email");
var txtPass = document.getElementById("pass");
var form = document.querySelector("form");

const loginUser = (e) => {
  e.preventDefault();

  var checkloginSuccess = false;
  for (var i = 0; i < getUser.length; i++) {
    if (
      getUser[i].email == txtEmail.value &&
      getUser[i].password == txtPass.value
    ) {
      checkloginSuccess = true;
      break;
    }
  }
  if (checkloginSuccess == true) {
    sessionStorage.setItem("user", txtEmail.value);
    var user = sessionStorage.getItem("user");
    user ? (location.href = "/product.html") : "";
  } else {
    if (txtEmail.value == "") {
      txtEmail.nextElementSibling.textContent = "Bạn chưa nhập Email";
      setTimeout(() => {
        txtEmail.nextElementSibling.textContent = "";
      }, 2000);
    }
    if (txtPass.value == "") {
      txtPass.nextElementSibling.textContent = "Bạn chưa nhập mật khẩu";
      setTimeout(() => {
        txtPass.nextElementSibling.textContent = "";
      }, 3000);
    } else {
      alert("sai thông tin đăng nhập");
    }
  }
};

form.addEventListener("submit", (e) => {
  loginUser(e);
});
