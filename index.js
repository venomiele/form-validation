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
    let section = document.querySelectorAll(".form-validation");

    if(userValue == "") {
      setErrorFor(user, "Username can't be blank !");
    } else {
      setSuccessFor(user);
    }

    if(emailValue == "") {
      setErrorFor(email, "Email can't be empty")
    } else if (!validateEmail(emailValue)){
      setErrorFor(email, "Email is not valid")
   } else {
      setSuccessFor(email);
    }

    if(pass1Value == "") {
      setErrorFor(pass1, "Password can't be empty")
    } else if(!passValidation(pass1Value)) {
      setErrorFor(pass1, "Password must contain at least an uppercase letter,lowercase letter,a digit and a special character!")
  } else {
      setSuccessFor(pass1);
    }

    if(pass2Value == "") {
      setErrorFor(pass2, "Password can't be empty")
    } else {
      setSuccessFor(pass2);
    }

  }

  // Error Case function

  function setErrorFor(input, message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector(".error");
    small.innerText = message;
    formControl.className = "form-validation error-msg";
  }

  // Success Case function

  function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = "form-validation success";
  }
  
//Form validaton RegEx

  function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
  } 

  //Password validation regex


  function passValidation(password) {
    var pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
    return pattern.test(password);
  }