//Set Variables
const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirmEmail");

function validateEmail() {
  if (email.value !== confirmEmail.value) {
    confirmEmail.setCustomValidity("Email addresses do not match");
  } else {
    confirmEmail.setCustomValidity("");
  }
}

email.addEventListener("input", validateEmail);
confirmEmail.addEventListener("input", validateEmail);
