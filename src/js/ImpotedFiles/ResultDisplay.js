let ProceesBar, Parcent, RightAnswerElement, WorngAnswer, TotalQuestions;
ProceesBar = document.querySelector(".ProcessBackgrond");
Parcent = document.querySelector(".Percente");
RightAnswerElement = document.querySelector(".Right >span");
WorngAnswer = document.querySelector(".Worng >span");
TotalQuestions = document.querySelector(".Atempt >span");

// Fill Datas
TotalQuestions.innerText = localStorage.getItem("TotalQuestions");
RightAnswerElement.innerText = localStorage.getItem("RightAnswer");
WorngAnswer.innerText = TotalQuestions.innerText - RightAnswerElement.innerText;
Parcent.innerText =
  (localStorage.getItem("RightAnswer") * 100) /
    localStorage.getItem("TotalQuestions") +
  "%";
const ProceesBarFunction = () => {
  ProceesBar.style.width = Parcent.innerText;
};
ProceesBarFunction();
console.log((RightAnswerElement.innerText * 100) / TotalQuestions.innerText);
