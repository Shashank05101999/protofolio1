var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "sun.jpg";
  } else {
    icon.src = "m3.png";
  }
};
// hello  what is going on
