let prezzo = 25; // prezzo iniziale

const prezzoEl = document.getElementById("prezzo");
const btn1 = document.getElementById("btn1");
const btn5 = document.getElementById("btn5");
const confirmButton = document.getElementById("confirm");

// +1M
btn1.addEventListener("click", () => {
  prezzo += 1;
  prezzoEl.textContent = prezzo;
});

// +5M
btn2.addEventListener("click", () => {
  prezzo += 5;
  prezzoEl.textContent = prezzo;
});

// Conferma
confirmButton.addEventListener("click", () => {
  alert("Hai confermato l'acquisto a €" + prezzo + "M");
});
