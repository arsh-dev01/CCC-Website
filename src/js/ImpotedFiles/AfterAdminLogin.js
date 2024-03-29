const name = new Date();
console.dir(name);
console.log(name.setDate(15));
document.querySelector(".Result").addEventListener("click", () => {
  //   alert("");
  open("result.html", "_self");
});
document.querySelector(".AddQuestion").addEventListener("click", () => {
  window.open("QuestionAdd.html", "_self");
});

document.querySelector(".EditAdminInfo").addEventListener("click", () => {
  window.open("AdminInfoEdit.html", "_self");
});
document.querySelector(".StudentEdit").addEventListener("click", () => {
  window.open("StudentEdit.html", "_self");
});
