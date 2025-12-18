/* ================= GLOBAL ================= */
function hideAllScreens() {
  document.querySelectorAll("section.screen").forEach(s => {
    s.classList.add("hidden");
  });
}

/* ================= INTERFACE 1 → PASSWORD ================= */
function openPasswordScreen() {
  // fade bubbles
  document.querySelectorAll(".bubble").forEach(b => {
    b.style.opacity = "0";
  });

  // zoom name
  const name = document.getElementById("name");
  name.style.transform = "scale(3)";
  name.style.opacity = "0";

  setTimeout(() => {
    document.getElementById("interface1").classList.add("hidden");
    document.getElementById("passwordScreen").classList.remove("hidden");
  }, 1500);
}

/* ================= PASSWORD CHECK ================= */
function checkPassword() {
  const pass = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("passError");

  if (pass === "c5d9") {
    error.style.display = "none";
    document.getElementById("passwordScreen").classList.add("hidden");
    document.getElementById("interface2").classList.remove("hidden");
  } else {
    error.style.display = "block";
  }
}

/* ================= ZONE CLICKS ================= */
document.addEventListener("DOMContentLoaded", () => {

  document.querySelector(".z1").onclick = () => openInfo("interface3");
  document.querySelector(".z2").onclick = () => openInfo("interface4");
  document.querySelector(".z3").onclick = () => openInfo("interface5");
  document.querySelector(".z4").onclick = () => openInfo("interface6");
  document.querySelector(".z5").onclick = () => openInfo("interface7");

});

function openInfo(id) {
  hideAllScreens();
  document.getElementById(id).classList.remove("hidden");
}

