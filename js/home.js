window.onload = () => {
  const user = JSON.parse(localStorage.getItem("userLoggedIn")) || null;
  if (!user) {
    window.location.replace("/Login-System/pages/login");
    return false;
  }

  console.log("user", user);

  document.getElementById("username").innerHTML = user.name;
};

document.getElementById("logoutBtn").onclick = function (e) {
  e.preventDefault();
  localStorage.removeItem("userLoggedIn");
  location.replace("/Login-System/pages/login");
};
