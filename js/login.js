window.onload = function () {
  const username = localStorage.getItem("userLoggedIn");
  if (username) {
    location.replace("/Login-System");
  }
};

document.querySelector("form").onsubmit = function (e) {
  e.preventDefault();
  if (isAllowToSubmit()) {
    const userLogged = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    const user = users.find((item) => item.email == userLogged.email);

    if (!user) {
      showErrorMessage("User Not Found!!!");
      return false;
    }

    if (user.password !== userLogged.password) {
      showErrorMessage("Wrong Password!!!");
      return false;
    }

    localStorage.setItem("userLoggedIn", JSON.stringify(user));
    location.replace("/Login-System");

    return true;
  } else {
    showErrorMessage("Error, Please Check Fron Your Data!!!");
  }
};
