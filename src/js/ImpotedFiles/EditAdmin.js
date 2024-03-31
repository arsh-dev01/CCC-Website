let Inputs = document.querySelectorAll("input");
let Icons = document.querySelectorAll("i");
console.clear();
const InputFocus = () => {
  Inputs.forEach((input) => {
    input.addEventListener("focus", (Input) => {
      Input.target.classList.remove("Focused");

      let Type = Input.target.attributes.type.nodeValue;
      if (Type == "password") {
        switch (Input.target.classList[1]) {
          case "PasswordInput":
            Icons[0].classList.add("FocusonIcons");
            break;

          case "PasswordInput2":
            Icons[1].classList.add("FocusonIcons");

            break;

          default:
            break;
        }
      }
    });
    input.addEventListener("focusout", (Input) => {
      if (Input.target.value != "") {
        Input.target.classList.remove("Focus");
        Input.target.classList.add("Focused");
      } else {
        let Type = Input.target.attributes.type.nodeValue;
        if (Type == "password") {
          switch (Input.target.classList[1]) {
            case "PasswordInput":
              Icons[0].classList.remove("FocusonIcons");
              break;

            case "PasswordInput2":
              Icons[1].classList.remove("FocusonIcons");

              break;

            default:
              break;
          }
        }
      }
    });
  });
};
InputFocus();
let AdminObject = JSON.parse(localStorage.getItem("AdminInfo"));
let InstitutionValue;
let UserNameValue;
let PasswordValue;

// console.log(AdminObject.Admin);
// console.log(AdminObject.Admin.Institution);
// console.log(AdminObject.Admin.AdminUserName);
// console.log(AdminObject.Admin.AdminPassword);
let SubmitButton = document.querySelector(".AdminEditSubmitButton");
let Institution = document.querySelector(".InsitutionName");
let UserName = document.querySelector(".AdminUserNameEdit");
let Password = document.querySelector(".AdminPasswordEdit");
let ConformPassword = document.querySelector(".AdminPasswordConform");
if (AdminObject) {
  InstitutionValue = AdminObject.Admin.Institution;
  UserNameValue = AdminObject.Admin.AdminUserName;
  PasswordValue = AdminObject.Admin.AdminPassword;

  // Input Focus
  Institution.classList.add("Focused");
  UserName.classList.add("Focused");
  Password.classList.add("Focused");

  Icons[0].classList.add("FocusonIcons");
  // Inputing
  Institution.value = InstitutionValue;
  UserName.value = UserNameValue;
  Password.value = PasswordValue;
}

SubmitButton.onclick = () => {
  let Empty = true;
  Inputs.forEach((e) => {
    if (e.value == "" && Empty) {
      Empty = false;
      alert(e.attributes.placeholder.nodeValue);
    }
  });
  console.log(Empty);
  if (Password.value != ConformPassword.value && Empty) {
    alert("Password are not Matched!!");
  } else if (Password.value == ConformPassword.value && Empty) {
    AdminObject.Admin.Institution = Institution.value;
    AdminObject.Admin.AdminUserName = UserName.value;
    AdminObject.Admin.AdminPassword = Password.value;
    alert("Changes are Saved>>");
    localStorage.setItem("AdminInfo", JSON.stringify(AdminObject));
  }
};
