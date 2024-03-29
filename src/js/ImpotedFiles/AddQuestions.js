let QuesitonInEnglish = document.querySelector(".QuestionEnglish");
let QuesitonInHindi = document.querySelector(".QuestionHindi");
let AnswerInEnglish = document.querySelector(".AnswerInEnglish");
let AnswerInHindi = document.querySelector(".AnswerInHindi");
let OptionsEnglish = document.querySelectorAll(".OptionInEnglish");
let OptionsHindi = document.querySelectorAll(".OptionInHindi");
let SubmitBtn = document.querySelector(".AddQuestionsSubmit");
export{ QuesitonInEnglish,QuesitonInHindi,AnswerInEnglish,AnswerInHindi,OptionsEnglish,OptionsHindi}
let TotalClick = 0;
let QuesitonObject = {
  Question: {
    English: "",
    Hindi: "",
  },
  Answer: {
    English: "",
    Hindi: "",
  },
  Options: {
    English: ["", "", ""],
    Hindi: ["", "", ""],
  },
};
let selet = document.querySelector("#Chapters");
let SelectedChapter = selet.options[selet.selectedIndex].value;
selet.addEventListener("change", () => {
  SelectedChapter = selet.options[selet.selectedIndex].value;
  console.log(SelectedChapter);
});
//<<!!!!!!!!!!!!!!!QuestionText change into Questions line 32!!!!!!!!!!>>>>
import { CheckDual } from "./CheckQuestionDual.js";
const AddQuestion = () => {
  let QuestionJson = JSON.parse(localStorage.getItem("Questiontext"));
  console.log(QuestionJson);
  let QuestionNum = Object.keys(QuestionJson[SelectedChapter]).length;
  QuesitonObject[`Question`][`English`] = QuesitonInEnglish.value;
  QuesitonObject[`Question`][`Hindi`] = QuesitonInHindi.value;
  QuesitonObject[`Answer`][`English`] = AnswerInEnglish.value;
  QuesitonObject[`Answer`][`Hindi`] = AnswerInHindi.value;
  // Options
  for (let i = 0; i <= 2; i++) {
    QuesitonObject[`Options`][`English`][i] = OptionsEnglish[i].value;
    QuesitonObject[`Options`][`Hindi`][i] = OptionsHindi[i].value;
  }
  console.log(QuesitonObject);
  QuestionJson[SelectedChapter][`Q_${QuestionNum + 1}`] = QuesitonObject;
  console.log(QuestionJson);
  console.log(QuestionNum);
  localStorage.setItem("Questiontext", JSON.stringify(QuestionJson));
  let input = document.querySelectorAll("input");
  input.forEach((element) => {
    element.value = "";
  });
}
SubmitBtn.addEventListener("click", () => {
  AddQuestion();
});
