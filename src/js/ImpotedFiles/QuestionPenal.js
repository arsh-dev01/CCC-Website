//<<============== Full Object ,Question,Options,Answers Are Importing !!!!=================>>>
import {
  userId,
  QuestionInEnglish,
  QuestionInHindi,
  OptionsInEnglish,
  OptionsInHindi,
  Answer,
  QuestionNumber,
} from "./FilterQuestionObject.js";
import {
  StudentResultObject,
  RightAnswer,
  StudentNameValue,
} from "./CheckAnswer.js";
let Student = localStorage.getItem("LoginedStudent");
var today = new Date();
let RightAnswerElement;
let ResultObject;

// <<<<<<<<<<<=====Creating Date Variabel==>>>>>>>>>>>>>>
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
// ======>>>>>>>Creating Hours Vareabels<<<<<<<<<<<<<<<<==========
let Hours = today.getHours(); // => 9
let Minutes = today.getMinutes(); // =>  30
let Seconds = today.getSeconds(); // => 51

var ampm = Hours >= 12 ? "PM" : "AM";
Hours = Hours % 12;
Hours = Hours ? Hours : 12; // the hour '0' should be '12'
Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
var Timestr = Hours + ":" + Minutes + " " + ampm;
today = yyyy + "-" + mm + "-" + dd;
let NumberForQuestion;

if (JSON.parse(localStorage.getItem("Results"))) {
  ResultObject = JSON.parse(localStorage.getItem("Results"));
} else {
  ResultObject = {};
}
// ------Create Varibel For Question Number --------->>
const ChapterNumber = () => {
  let Num = localStorage.getItem("ChapterNumber");
  if (Num) {
    return Num;
  } else {
    return 1;
  }
};
NumberForQuestion = 1;
let Queston_number_Parend =
  document.querySelector(".QuestionNumber").children[0];
// Total Number Of Questions
let TotalNumberOfQuesiton = localStorage.getItem("QuestionNum");
// let TotalNumberOfQuesiton = 16;
let Queston_number_Show = NumberForQuestion;
// <<============ Call Imported QuestionNumber Function can Ues For Output=========>>
QuestionNumber("Next");
let NextQuestionButton = document.querySelector(".NextQuestion");
let PreviewQuestionButton = document.querySelector(".QuestionPreview");
// <<<==================For Next Question  Click on Next Button================>>>
NextQuestionButton.addEventListener("click", () => {
  let Options = document.querySelectorAll(".Option");
  Options.forEach((Element) => {
    Element.classList.remove("WorngAnswer");
    Element.classList.remove("PointerEventNone");
    Element.classList.remove("RightAnswer");
  });
  if (Queston_number_Show != TotalNumberOfQuesiton) {
    Queston_number_Show++;
    NumberForQuestion++;
    if (Queston_number_Show < 10) {
      Queston_number_Parend.innerText = "0" + Queston_number_Show;
    } else {
      Queston_number_Parend.innerText = Queston_number_Show;
    }
    QuestionNumber("Next", Queston_number_Show);
    MainFunction();
  }
  TotalNumberOfQuesiton = 4;
  if (Queston_number_Show == TotalNumberOfQuesiton) {
    NextQuestionButton.innerText = "Submit";
    NextQuestionButton.classList.replace("NextQuestion", "SubmitAnswers");
    let QuestionSubmitBtn = document.querySelector(".SubmitAnswers");
    QuestionSubmitBtn.addEventListener("click", () => {
      if (ResultObject[today] == null) {
        ResultObject[today] = {};
      }
      if (ResultObject[today][Timestr] == null) {
        ResultObject[today][Timestr] = {};
      }
      ResultObject[today][Timestr][Student] = {};
      ResultObject[today][Timestr][Student]["QuestionType"] =
        localStorage.getItem("QuestionType");
      ResultObject[today][Timestr][Student]["TotalRightAnswer"] = RightAnswer();
      ResultObject[today][Timestr][Student]["TotalQuestion"] =
        TotalNumberOfQuesiton;
      ResultObject[today][Timestr][Student]["ChapterNumber"] =
        localStorage.getItem("ChapterNumber");
      if (StudentNameValue != undefined) {
        ResultObject[today][Timestr][Student]["StudentName"] = StudentNameValue;
      }
      console.log(ResultObject);
      localStorage.setItem("Results", JSON.stringify(ResultObject));
      localStorage.setItem("RightAnswer", RightAnswer());
      localStorage.setItem("TotalQuestions", TotalNumberOfQuesiton);
      // window.open("ResultDisplay.html", "_self");
    });
  }
});
// <<<===============For PreViwes Question  Click on Previwe Button=============>>>
PreviewQuestionButton.addEventListener("click", () => {
  if (Queston_number_Show != 1) {
    Queston_number_Show--;
    if (Queston_number_Show != 0) {
      if (Queston_number_Show < 10) {
        Queston_number_Parend.innerText = "0" + Queston_number_Show;
      } else {
        Queston_number_Parend.innerText = Queston_number_Show;
      }
    }
    QuestionNumber("Previwes", Queston_number_Show);
    MainFunction();
  }
});
//!!!!!!!!!!!!!!!!========Complete Logic for Question ======================!!!!!!!!
const MainFunction = () => {
  let EnglishQuestionElementObject =
    document.querySelector(".QuestionInEnglish");
  let HindiQuestionElementObject = document.querySelector(".QuestionInHindi");
  let OptionsElementObject = document.querySelectorAll(".Option");
  // Question Vreabel for .innerText
  let EnglishQuestionElement = EnglishQuestionElementObject.children[0];
  let HindiQuestionElement = HindiQuestionElementObject.children[0];

  EnglishQuestionElement.innerText = QuestionInEnglish;
  HindiQuestionElement.innerText = QuestionInHindi;
  // Answer
  const WriteAnswer = () => {
    let OptionRandomIndex = Math.floor(Math.random() * 4);
    //  EnglishOptionElement
    OptionsElementObject[
      OptionRandomIndex
    ].children[0].children[0].children[0].innerText = Answer["English"];
    //   HindiOptionElement
    OptionsElementObject[
      OptionRandomIndex
    ].children[0].children[0].children[1].children[0].innerText =
      Answer["Hindi"];
    RightAnswerElement = OptionsElementObject[OptionRandomIndex];
  };

  WriteAnswer();
  let OptionIndex = 0;
  OptionsElementObject.forEach((Element) => {
    Element.classList.remove("OptionActive");
    let EleEnglish = Element.children[0].children[0].children[0];
    let EleHindi = Element.children[0].children[0].children[1].children[0];
    if (EleEnglish.innerText != Answer["English"]) {
      EleEnglish.innerText = OptionsInEnglish[OptionIndex];
      EleHindi.innerText = OptionsInHindi[OptionIndex];
      OptionIndex++;
    }
  });
};
MainFunction();

export { NumberForQuestion };
export { RightAnswerElement, today };
