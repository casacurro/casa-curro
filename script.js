const resenas = document.querySelectorAll(".resena");
let actual = 0;

setInterval(function () {
  resenas[actual].classList.remove("activa");
  actual = (actual + 1) % resenas.length;
  resenas[actual].classList.add("activa");
}, 4000);