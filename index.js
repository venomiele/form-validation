let form = document.querySelector(".form");
let user = document.querySelector(".user");
let email = document.querySelector(".email");
let pass1 = document.querySelector(".pass1");
let pass2 = document.querySelector(".pass2");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    let userValue = user.value.trim();
    let emailValue = email.value.trim();
    let pass1Value = pass1.value.trim();
    let pass2Value = pass2.value.trim();

    let section = document.querySelector(".form-validation");
  if(userValue  == "") {
section.classList.add("error-msg");
section.classList.remove("succes");
  } else {
      section.classList.remove("error-msg");
      section.classList.add("succes");
  }
}