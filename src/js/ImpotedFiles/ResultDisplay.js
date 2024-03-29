let ProceesBar, Parcent, RightAnswerElement, WorngAnswer, TotalQuestions;
ProceesBar = document.querySelector(".ProcessBackgrond");
Parcent = document.querySelector(".Percente");
RightAnswerElement = document.querySelector(".Right >span");
WorngAnswer = document.querySelector(".Worng >span");
TotalQuestions = document.querySelector(".Atempt >span");
const ProceesBarFunction = () => {
  ProceesBar.style.width = "10%";
};
ProceesBarFunction();
console.log((RightAnswerElement.innerText * 100) / TotalQuestions.innerText);
