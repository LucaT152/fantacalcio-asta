function mostraLogin() {
  const formLogin = document.getElementById("form-login");
  const formRegistrazione = document.getElementById("form-registrazione");

  formLogin.classList.add("form-visibile");
  formLogin.classList.remove("form-nascosto");

  formRegistrazione.classList.add("form-nascosto");
  formRegistrazione.classList.remove("form-visibile");
}

function mostraRegistrazione() {
  const formLogin = document.getElementById("form-login");
  const formRegistrazione = document.getElementById("form-registrazione");

  formRegistrazione.classList.add("form-visibile");
  formRegistrazione.classList.remove("form-nascosto");

  formLogin.classList.add("form-nascosto");
  formLogin.classList.remove("form-visibile");
}
