let btn = document.getElementById("submit");
let names = document.getElementById("name");
let mail = document.getElementById("email");
let tel = document.getElementById("phone");
let dates = document.getElementById("date");

let dark = document.getElementById("theme");
let body = document.getElementsByTagName("body");



body[0].className = "light";

btn.addEventListener("click", function () {

  if (names.value === '' && mail.value === "" && tel.value === '' && dates.value === '') {
    alert("Form is incomplete");
  } 
  else {
    alert("Form submitted. Thanks for visiting 🙏");
  }
});

dark.addEventListener("click", function () {

  if (body[0].className === "light") {

    body[0].className = "dark";   
    dark.textContent = "Light Mode";
  }

  else {

    body[0].className = "light";  
    dark.textContent = "Dark Mode";
  }

});
