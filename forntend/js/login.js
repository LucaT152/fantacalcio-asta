function mostraLogin() {
  document.getElementById("form-login").classList.add("form-visibile");
  document.getElementById("form-login").classList.remove("form-nascosto");

  document.getElementById("form-registrazione").classList.add("form-nascosto");
  document
    .getElementById("form-registrazione")
    .classList.remove("form-visibile");
}

function mostraRegistrazione() {
  document.getElementById("form-registrazione").classList.add("form-visibile");
  document
    .getElementById("form-registrazione")
    .classList.remove("form-nascosto");

  document.getElementById("form-login").classList.add("form-nascosto");
  document.getElementById("form-login").classList.remove("form-visibile");
}
