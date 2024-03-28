var slide = document.getElementsByClassName("slide");
var indicator = document.getElementById("indicator");
var dots = document.getElementsByClassName("dots");
var autoplay = document
  .getElementsByClassName("banner-container")[0]
  .getAttribute("data-autoplay");
var l = slide.length;
var interval = 3500;
var set;

window.onload = () => {
  initialize();
  slide[0].style.opacity = "1";
  for (var j = 0; j < l; j++) {
    indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
  }

  dots[0].style.background = "#696969";

  const menu_button = document.querySelector(".hamburger");
  const mobile = document.querySelector(".navbar-handphone");
  menu_button.addEventListener("click", function () {
    menu_button.classList.toggle("is_active");
    mobile.classList.toggle("is_active");
  });

  window.addEventListener("scroll", function () {
    const scrolledPosition = window.scrollY;
    const mobiles = document.querySelector(".navbar-container");
    if (scrolledPosition >= 100) {
      mobiles.classList.add("glass");
    } else {
      mobiles.classList.remove("glass");
    }
  });
  // Accordion
  const accordionBtn = document.querySelectorAll(".accordion-wrapper");

  accordionBtn.forEach((item) =>
    item.addEventListener("click", () => {
      item.classList.toggle("is_toggled");
    })
  );

  keAtas();
};
function initialize() {
  if (autoplay === "true")
    set = setInterval(function () {
      next();
    }, interval);
}

function change(index) {
  clearInterval(set);
  count = index;
  for (var j = 0; j < l; j++) {
    slide[j].style.opacity = "0";
    dots[j].style.background = "#bdbdbd";
  }
  slide[count].style.opacity = "1";
  dots[count].style.background = "#696969";
}

var count = 0;
function next() {
  clearInterval(set);
  slide[count].style.opacity = "0";
  count++;
  for (var j = 0; j < l; j++) {
    dots[j].style.background = "#bdbdbd";
  }

  if (count == l) {
    count = 0;
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  } else {
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  }
  initialize();
}

function prev() {
  clearInterval(set);
  slide[count].style.opacity = "0";
  for (var j = 0; j < l; j++) {
    dots[j].style.background = "#bdbdbd";
  }
  count--;

  if (count == -1) {
    count = l - 1;
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  } else {
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  }
  initialize();
}

function validateName() {
  var name = document.getElementById("nama").value;
  document.getElementById("error-icon-0").classList.add("visible");
  document.getElementById("success-icon-0").classList.remove("visible");
  var nameRegex = /^[a-z A-Z]*$/;
  var errorMsg = "";
  document.getElementById("nameError").style = "color:#e74c3c";
  document.getElementById("nama").classList.add("error");

  if (name === "") {
    errorMsg = "Name is required.";
    document.getElementById("nama").style.borderColor = "#e74c3c";
    document.getElementById("nama").style.color = "#e74c3c";
  } else if (!nameRegex.test(name)) {
    errorMsg = "Terdapat angka atau symbol.";
    document.getElementById("nama").style.borderColor = "#e74c3c";
    document.getElementById("nama").style.color = "#e74c3c";
  } else {
    errorMsg = "Berhasil";
    document.getElementById("nama").style.borderColor = "#2ecc71";
    document.getElementById("nama").style.color = "black";
    document.getElementById("nameError").style = "color: #fff";
    document.getElementById("error-icon-0").classList.remove("visible");
    document.getElementById("success-icon-0").classList.add("visible");
  }

  document.getElementById("nameError").innerHTML = errorMsg;
}

function validateEmail() {
  var email = document.getElementById("email").value;

  document.getElementById("error-icon-1").classList.add("visible");
  document.getElementById("success-icon-1").classList.remove("visible");
  var errorMsg = "";
  var emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  document.getElementById("emailError").style = "color:#e74c3c ";
  if (email === "") {
    errorMsg = "Email harus di isi";
    document.getElementById("email").style.color = "#e74c3c";
    document.getElementById("email").style.borderColor = "#e74c3c";
  } else if (!emailRegex.test(email)) {
    document.getElementById("email").style.borderColor = "#e74c3c";
    document.getElementById("email").style.color = "#e74c3c";
    document.getElementBy;
    errorMsg = "Bukan format email.";
  } else {
    errorMsg = "Berhasil";
    document.getElementById("email").style.borderColor = "#2ecc71";
    document.getElementById("email").style.color = "black";
    document.getElementById("emailError").style = "color: #fff";
    document.getElementById("error-icon-1").classList.remove("visible");
    document.getElementById("success-icon-1").classList.add("visible");
  }

  document.getElementById("emailError").innerHTML = errorMsg;
}

function validateSelect() {
  var errorMsg = "";
  var select = document.getElementById("option").value[0];
  if (select == "") {
    errorMsg = "Harus Di isi!";
  }
  document.getElementById("selectError").innerHTML = errorMsg;
}

function validateForm() {
  var name = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var select = document.getElementById("option").value[0];
  var errorMsg = "";

  document.getElementById("nama").style.color = "black";
  document.getElementById("email").style.color = "black";

  if (name === "") {
    errorMsg += "Name is required. \n";
    document.getElementById("nama").style.color = "#e74c3c";
  } else if (!/^[a-z A-Z]*$/.test(name)) {
    errorMsg += "Angka dan symbol tidak diperbolehkan! \n";
    document.getElementById("nama").style.color = "#e74c3c";
  }
  if (email === "") {
    errorMsg += "Email is required. \n";
    document.getElementById("email").style.color = "#e74c3c";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMsg += "Invalid email format. \n";
    document.getElementById("email").style.color = "#e74c3c";
  }
  if (select == null) {
    errorMsg += "Opsi kosong!";
  }

  if (errorMsg !== "") {
    formValidWrong(errorMsg);
    return false;
  }
  correct();

  document.getElementById("form").submit();
  document.getElementById("form").reset();
  return true;
}

function correct() {

  alert("Success");
}
function formValidWrong(errorMsg) {
  alert(errorMsg);
}

function keAtas() {
  const topBtn = document.getElementById("toTop");
  topBtn.addEventListener("click", () => {
    window.scrollTo(top);
  });
}
