let StudentEditBox = document.querySelectorAll(".StudentLoginPreviewBox");
let StudentNumberBox = document.querySelectorAll(".StudentNumber");
let StudentEditPassword = document.querySelector(".StudentLoginPassword");
let StudentNumber = 0;
let StudentLoginBotton = document.querySelector(".StudentLoginButton");
let AdminObject = JSON.parse(localStorage.getItem("AdminInfo"));
let StudentNumberForPenal;
StudentNumberBox.forEach((Number) => {
  StudentNumber++;
  Number.innerHTML = StudentNumber;
});
StudentEditBox.forEach((Student) => {
  Student.addEventListener("click", () => {
    StudentEditPassword.value = "";
    StudentEditPassword.setAttribute("autofocus", true);
    console.dir(StudentEditPassword.autofocus);
    let penal = document.querySelector(".StudentLoginPenal");
    penal.classList.add("PenalLoginDisplayFlex");
    StudentNumberForPenal = Student.children[1].children[0].innerHTML;
    let StudentLoginPenalNumber = document.querySelector(
      ".StudentLoginPenalNumber"
    );
    StudentLoginPenalNumber.innerHTML = StudentNumberForPenal;
  });
});
StudentLoginBotton.addEventListener("click", () => {
  if (StudentEditPassword.value != "") {
    AdminObject["Student"][`Student${StudentNumberForPenal}`] =
      StudentEditPassword.value;
    let CheckBox = document.querySelector(".CheckBox");
    CheckBox.addEventListener("change", () => {
      if (CheckBox.checked == true) {
        for (let i = 1; i <= 12; i++) {
          AdminObject["Student"][`Student${i}`] = StudentEditPassword.value;
        }
      }
    });
    if (confirm("Change Student Password")) {
      localStorage.setItem("AdminInfo", JSON.stringify(AdminObject));
    }
    document.querySelector("input").value = "";
  } else {
    alert("Enter Student Password!!");
  }
});
let PasswordIcons = document.querySelector(".Password");
PasswordIcons.addEventListener("click", (e) => {
  let PasswordInput = document.querySelector(".PasswordInput");
  if (PasswordInput.type == "password") {
    PasswordInput.type = "text";
  } else {
    PasswordInput.type = "password";
  }
  PasswordIcons.classList.toggle("fa-eye-slash");
  PasswordIcons.classList.toggle("fa-eye");
});
