let StudentNumber = 0;
let StudentNumberBox = document.querySelectorAll(".StudentNumber");
let StudentLoginPassword = document.querySelector(".StudentLoginPassword");
let StudentLoginBotton = document.querySelector(".StudentLoginButton");
let StudentNumberForLogin = document.querySelector(".StudentLoginPenalNumber");
let LoginedStudentNumber;
let AdminPenal = document.querySelector(".AdminLoginPenal");
console.log(AdminPenal);
StudentNumberBox.forEach((Number) => {
  StudentNumber++;
  Number.innerHTML = StudentNumber;
});

import { StudentPassword } from "./StudentLoginJPasswordExporting.js";
let ReceviStudentPassword;
let StudentLoginBox = document.querySelectorAll(".StudentLoginPreviewBox");
StudentLoginBox.forEach((Student) => {
  Student.addEventListener("click", () => {
    let penal = document.querySelector(".Loginback");
    penal.style.display = "flex";
    let StudentNumberForPenal = Student.children[1].children[0].innerHTML;
    console.log(StudentNumberForPenal);
    let StudentLoginPenalNumber = document.querySelector(
      ".StudentLoginPenalNumber"
    );
    StudentLoginPenalNumber.innerHTML = StudentNumberForPenal;
    ReceviStudentPassword = StudentPassword(StudentNumberForLogin.innerText);
    penal.onclick = (event) => {
      if (event.target === event.currentTarget) {
        event.target.style.display = "none";
      }
    };
  });
});
StudentLoginBotton.addEventListener("click", () => {
  if (StudentLoginPassword.value != "") {
    if (ReceviStudentPassword == StudentLoginPassword.value) {
      LoginedStudentNumber = StudentNumberForLogin.innerText;
      window.open("AfterStudentLogin.html", "_self");
      console.log(Student);
    } else {
      alert("Password Are Worng!!");
    }
  } else {
    alert("Enter Student Password!!");
  }
});

export { LoginedStudentNumber };

// console.log(Object.keys(AdminObject).length);

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
export { today };

let PasswordIcons = document.querySelector(".Password");
PasswordIcons.addEventListener("click", (e) => {
  let PasswordInput = document.querySelector(".StudentLoginPassword");
  if (PasswordInput.type == "password") {
    PasswordInput.type = "text";
  } else {
    PasswordInput.type = "password";
  }
  PasswordIcons.classList.toggle("fa-eye-slash");
  PasswordIcons.classList.toggle("fa-eye");
});
// window.onbeforeunload = confirmExit;
// function confirmExit() {
//   return "You have attempted to leave this page.  If you have made any changes to the fields without clicking the Save button, your changes will be lost.  Are you sure you want to exit this page?";
// }
// window.onbeforeunload = function () {
//   // Do something
//   return "arshnoor"
// };
// // OR
// window.addEventListener("beforeunload", function (e) {
//   // Do something
//   return "Hacker"
// });