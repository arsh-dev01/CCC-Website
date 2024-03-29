import {
  Answer,
  QuesitonNumberForCheckAnswer,
} from "./FilterQuestionObject.js";
import { NumberForQuestion } from "./QuestionPenal.js";
let StudentNameValue = "Arshnoor";
// let StudentNameValue = prompt("Enter Your Name");
export { StudentNameValue };
let UserAnswers = [];
let Marks;

let Options = document.querySelectorAll(".Option");

Options.forEach((Op) => {
  Op.addEventListener("click", () => {
    let Type = localStorage.getItem("TestType");
    if (Type == "MockTesting") {
      MockTest(Op);
    } else {
      MCQTest(Op);
    }
    Marks = UserAnswers.reduce((partialSum, a) => partialSum + a, 0);
  });
});

const RightAnswer = () => {
  return Marks;
};
let StudentResultObject = {
  Time: "",
  ChapterNumber: "",
  StudentName: "",
  QuestionType: "",
  TotalQuestion: "",
  TotalRightAnswer: "",
};
StudentResultObject["ChapterNumber"] = localStorage.getItem("ChapterNumber");
export { UserAnswers, RightAnswer, StudentResultObject };
// Display Ansewer on MCQ test
// let TestType = localStorage.getItem("TestType");

// if (TestType == "MCQTesting") {

// }
import { RightAnswerElement } from "./QuestionPenal.js";

const MCQTest = (Op) => {
  Options.forEach((Element) => {
    // Element.classList.add("PointerEventNone");
    Element.classList.remove("WorngAnswer")
    Element.classList.remove("RightAnswer")
  });
  if (Op != RightAnswerElement) {
    // Op.classList.add("RightAnswer");
    Op.classList.add("WorngAnswer");
  } else {
    RightAnswerElement.classList.add("RightAnswer");
    console.log("Not Equal");
  }
};
const MockTest = (Op) => {
  Options.forEach((Element) => {
    Element.classList.remove("OptionActive", "PointerEventNone");
  });
  Op.classList.add("OptionActive", "PointerEventNone");
  if (Answer["English"] == Op.children[0].children[0].children[0].innerText) {
    UserAnswers[NumberForQuestion - 1] = 1;
    console.log("Right");
  } else {
    UserAnswers[NumberForQuestion - 1] = 0;
  }
};
