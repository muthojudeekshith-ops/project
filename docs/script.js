const nameText = document.getElementById("nameText");

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* Interface 1 → 2 */
nameText.addEventListener("click", () => {
  nameText.style.transform = "scale(3)";
  nameText.style.opacity = "0";

  document.querySelectorAll(".bubble").forEach(b => {
    b.style.opacity = "0";
  });

  setTimeout(() => {
    showScreen("interface2");
  }, 2000);
});

/* Click zones → specific interfaces */
document.querySelector(".z1").onclick = () => showScreen("interface3");
document.querySelector(".z2").onclick = () => showScreen("interface4");
document.querySelector(".z3").onclick = () => showScreen("interface5");
document.querySelector(".z4").onclick = () => showScreen("interface6");
document.querySelector(".z5").onclick = () => showScreen("interface7");
// Deekshith click → show password screen
function openPasswordScreen() {
  document.getElementById("interface1").classList.add("hidden");
  document.getElementById("passwordScreen").classList.remove("hidden");
}

// Password check
function checkPassword() {
  const pass = document.getElementById("passwordInput").value;
  const error = document.getElementById("passError");

  if (pass === "c5d9") {
    document.getElementById("passwordScreen").classList.add("hidden");
    document.getElementById("interface2").classList.remove("hidden");
  } else {
    error.style.display = "block";
  }
}
