function go() {
  var user = $("#user");
  var password = $("#password");

  if (password.val() == "123456" && user.val() == "admin") {
    window.location = "home.html";
  } else {
    alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
  }
}
