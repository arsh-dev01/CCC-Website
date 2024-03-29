let TextArea = document.querySelector(".TextArea");
let TextAreaRequerd = false;
let GlitchInput = document.querySelector("#GlitchTextarea");
console.log("Gli", GlitchInput);
let OtherTextarea = document.querySelector("#OtherTextarea");
let RadioBtn = document.querySelectorAll(".RadioBtn");
let ReportBtn = document.querySelector(".ReportSubmitBtn");
// Radio Button Uniqe clicl
RadioBtn.forEach((btn) => {
  btn.onchange = () => {
    TextAreaRequerd = false;
    btn.value = "on";
    switch (btn.classList[1]) {
      case "Glitch":
        TextAreaRequerd = true;
        break;
      case "Other":
        TextAreaRequerd = true;
        break;
      default:
        break;
    }
  };
});
// Report Button OnClick Evenhaddling
ReportBtn.onclick = () => {
  let Checked = false;
  RadioBtn.forEach((btn) => {
    if (btn.value == "on") {
      Checked = true;
      if (TextAreaRequerd) {
        if (TextArea.value != "") {
          obj.AboutofReport = TextArea.value;
          ReportSave();
        } else {
          alert("Textarea are empty");
        }
      } else {
        ReportSave();
      }
    }
  });
};
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;
let ReportQuesiton;
if (JSON.parse(localStorage.getItem("QuestionobjReprort"))) {
  ReportQuesiton = JSON.parse(localStorage.getItem("QuestionobjReprort"));
} else {
  ReportQuesiton = "Nothing";
}
console.log(ReportQuesiton);
let obj = {
  Date: today,
  CurrentPath: localStorage.getItem("CurrentPath"),
  ReportQuestionObj: ReportQuesiton,
  AboutofReport: "",
};
let ReportObj = {};
const ReportSave = (run) => {
  let ReportLength;
  if (JSON.parse(localStorage.getItem("Reports"))) {
    ReportLength = Object.keys(
      JSON.parse(localStorage.getItem("Reports"))
    ).length;
    ReportObj = JSON.parse(localStorage.getItem("Reports"));
  } else {
    ReportLength = 0;
    ReportObj = {};
  }
  ReportObj[`ReportNo-${ReportLength + 1}`] = obj;
  localStorage.setItem("Reports", JSON.stringify(ReportObj));
};
