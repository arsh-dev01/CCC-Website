import { HeaderData } from "./Header.js";
// document.querySelector("header").innerHTML = HeaderData;
let EnterAdminUserName = document.querySelector(".AdminUserNameInputBox");
let EnterAdminPassword = document.querySelector(".AdminPasswordInputBox");
let AdminLoginBtn = document.querySelector(".adminLoginBtn");

import { AdminObject } from "./StudentLoginJPasswordExporting.js";
console.log(AdminObject);
console.log(AdminObject["Admin"]["AdminUserName"]);
console.log(AdminObject["Admin"]["AdminPassword"]);
// console.log(AdminObject.Admi);
AdminLoginBtn.addEventListener("click", () => {
  if (EnterAdminUserName.value != "") {
    if (EnterAdminPassword.value != "") {
      if (EnterAdminPassword.value.length < 8) {
        alert("Enter 8 Charecter Password");
      } else {
        let AdminUserName = AdminObject["Admin"]["AdminUserName"];
        let AdminPassword = AdminObject["Admin"]["AdminPassword"];
        console.log(AdminUserName);
        console.log(AdminPassword);
        if (AdminUserName == EnterAdminUserName.value) {
          if (AdminPassword == EnterAdminPassword.value) {
            window.open("AfterAdminLogin.html", "_self");
          } else {
            alert("Incorrect Password");
          }
        } else {
          alert("Incorrect UserName");
        }
      }
    } else {
      alert("Enter Password !");
    }
  } else {
    alert("Enter UserName !");
  }
});
