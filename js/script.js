let users = JSON.parse(localStorage.getItem("users")) || [];

const nameRegex = /^[a-zA-Z\u0600-\u06FF\s]+$/,
  emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+=?]{6,16}$/;

const nameInput = document.getElementById("name"),
  emailInput = document.getElementById("email"),
  passwordInput = document.getElementById("password");

function checkValidation(ele, reg) {
  const newRegex = new RegExp(reg);

  if (newRegex.test(ele.value)) {
    ele.classList.remove("invalid");
  } else {
    ele.classList.add("invalid");
  }
}

function isAllowToSubmit() {
  const inputs = document.querySelectorAll("form input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "" || inputs[i].classList.contains("invalid")) {
      return false;
    }
  }

  hideErrorMessage();
  return true;
}

function showErrorMessage(msg) {
  document.getElementById("error-msg").innerHTML = `<p>${msg}</p>`;
}

function hideErrorMessage() {
  document.getElementById("error-msg").innerHTML = "";
}

function removeValues() {
  const inputs = document.querySelectorAll("form input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

nameInput.addEventListener("input", () => {
  checkValidation(nameInput, nameRegex);
});

emailInput.addEventListener("input", () => {
  checkValidation(emailInput, emailRegex);
});

passwordInput.addEventListener("input", () => {
  checkValidation(passwordInput, passwordRegex);
});
