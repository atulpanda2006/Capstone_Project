let btn = document.getElementById("submit")
let names = document.getElementById("name")
let mail = document.getElementById("email")
let tel = document.getElementById("phone")
let dates = document.getElementById("date")


btn.addEventListener("click",function(){
   if (names.value === '' && mail.value === "" && tel.value === '' && dates.value === '')
    {
        alert("Form is incomplete")
    }
    else{
    alert("Form submitted .Thanks for visting 🙏")
    }
})
