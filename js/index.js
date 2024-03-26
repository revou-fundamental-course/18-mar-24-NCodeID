var slide = document.getElementsByClassName("slide");
var indicator = document.getElementById("indicator");
var dots = document.getElementsByClassName("dots");
var autoplay = document
  .getElementsByClassName("banner-container")[0]
  .getAttribute("data-autoplay");
var l = slide.length;
var interval = 8000;
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
      item.classList.toggle("is_toggled")
    })
  )
}
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
  var nameRegex = /^[a-z A-Z]*$/;
  var errorMsg = "";

  if (name === "") {
    errorMsg = "Name is required.";
    document.getElementById("nama").style.color = "red";
  } else if (!nameRegex.test(name)) {
    errorMsg = "Terdapat angka atau symbol.";
    document.getElementById("nama").style.color = "red";
  } else {
    errorMsg = "Berhasil";
    document.getElementById("nama").style.color = "black";
  }

  document.getElementById("nameError").innerHTML = errorMsg; // Update error message
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var errorMsg = "";
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    errorMsg = "Email harus di isi";
  } else if (!emailRegex.test(email)) {
    errorMsg = "Bukan format email.";
  } else {
    errorMsg = "Berhasil";
    document.getElementById("email").style.color = "black";
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
    document.getElementById("nama").style.color = "red";
  } else if (!/^[a-z A-Z]*$/.test(name)) {
    errorMsg += "Angka dan symbol tidak diperbolehkan! \n";
    document.getElementById("nama").style.color = "red";
  }
  if (email === "") {
    errorMsg += "Email is required. \n";
    document.getElementById("email").style.color = "red";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMsg += "Invalid email format. \n";
    document.getElementById("email").style.color = "red";
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
