// let Str = ``;
// let Box = document.querySelector(".CodeBox");
// Box.innerHTML = Str;
let OptionsElement = document.querySelectorAll(".Options >p");
let Option1 = [];
let Option2 = [];
let Option3 = [];
let First = 0,
  Second = 1,
  Third = 2;
let Answer = document.querySelectorAll(".correct >p");
let EnglishQuestions = document.querySelectorAll(".english >a");
let HindiQuestions = document.querySelectorAll(".hindi");
// Cereate Answer Array
let AnswerArr = [];
Answer.forEach((text) => {
  AnswerArr.push(text.innerText);
});
// Cereate Options Array

OptionsElement.forEach((P, Index) => {
  if (Index == First) {
    Option1.push(P.innerText);
    First += 3;
  }
  if (Index == Second) {
    Option2.push(P.innerText);
    Second += 3;
  }
  if (Index == Third) {
    Option3.push(P.innerText);
    Third += 3;
  }
});
let EnglishQuestionsArr = [];
let HindiQuestionsArr = [];
EnglishQuestions.forEach((EQ) => {
  EnglishQuestionsArr.push(EQ.innerText);
});
HindiQuestions.forEach((HQ) => {
  HindiQuestionsArr.push(HQ.innerText);
});

let Index = 0;
let ReusltObj = {};
for (let i = 1; i <= EnglishQuestionsArr.length; i++) {
  let Quesitons = {
    Question: {
      English: EnglishQuestionsArr[Index],
      Hindi: HindiQuestionsArr[Index],
    },
    Answer: { English: AnswerArr[Index], Hindi: " " },
    Options: {
      English: [Option1[Index], Option2[Index], Option3[Index]],
      Hindi: ["", "", ""],
    },
  };
  // console.log(EnglishQuestionsArr.length);
  ReusltObj[`Q_${i}`] = Quesitons;
  // ReusltObj[`Q_${i}`]["Question"]["English"] = EnglishQuestionsArr[Index];
  Index++;
}
console.log(ReusltObj);
localStorage.setItem("Chapter5", JSON.stringify(ReusltObj));
