// =====================================Loader Impelmention=================================
let LoaderBody = document.createElement("div");
let Loader = document.createElement("div");
Loader.classList.add("loader");
LoaderBody.classList.add("LoaderBody");
let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "src/Style/LinkedFiles/Loader.css";
Loader.appendChild(link);
LoaderBody.appendChild(Loader);
document.querySelector("body").appendChild(LoaderBody);
window.onload = function () {
  document.querySelector(".LoaderBody").style.display = "none";
};

// ===================================== Back Forword Logic are Block=================================

window.history.forward(1);

// ===================================== Right Click Logic are Block=================================

document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);
