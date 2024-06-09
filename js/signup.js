window.onload = function () {
  const username = localStorage.getItem("userLoggedIn");
  if (username) {
    location.replace("/Login-System");
  }
};

document.querySelector("form").onsubmit = function (e) {
  e.preventDefault();
  if (isAllowToSubmit()) {
    const user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    const isFounded = users.find((item) => item.email == user.email);
    if (isFounded) {
      showErrorMessage("This User is Already Exists");
      return false;
    }
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById(
      "success-msg"
    ).innerHTML = `<p>Success Registration</p>`;

    removeValues();

    setTimeout(function () {
      location.replace("/Login-System/pages/login");
    }, 2500);

    return true;
  } else {
    showErrorMessage("Error, Please Check Fron Your Data!!!");
  }
};
