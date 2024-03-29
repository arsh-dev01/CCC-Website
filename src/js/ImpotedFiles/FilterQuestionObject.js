let QuestionInEnglish;
let ChapterValue = "chapter1";
let QuestionInHindi;
let OptionsInEnglish;
let OptionsInHindi;
let Answer;
let QuesitonNumberForCheckAnswer;
let ChpaterArray = ["chapter1", "chapter2", "chapter3", "chapter6"];
let QuestionNum = 10;
let randomNum;
let QuestionNumberValue;
// Change Chpater Number
const Chapter = () => {
  return ChpaterArray[Math.floor(Math.random() * ChpaterArray.length)];
};
console.clear;
const GenretQuestionNumber = () => {
  let QuestionLength = Object.keys(userId[ChapterValue]).length;
  randomNum = Math.floor(Math.random() * (QuestionLength - 1 + 1) + 1);
};
let Index = 0;
let PreViwesQuetionsObject = {
  QuesitonNum: [],
  ChapterNum: [],
};
let h;
// let NumberForQuestion=1;
let Previwes = false;
let PreviwesTime = 0;
//<<==================For Question To Other Javascript Fie================================>>
function QuestionNumber(BtnType, NumberForQuestion) {
  let QuestionType = localStorage.getItem("QuestionType");
  if (QuestionType != "Full Book") {
    ChapterValue = `chapter${localStorage.getItem("ChapterNumber")}`;
  } else {
    ChapterValue = Chapter();
  }
  if (BtnType == "Next") {
    if (!Previwes) {
      GenretQuestionNumber();

      QuestionNumberValue = `Q_${randomNum}`;
      if (PreViwesQuetionsObject.QuesitonNum.length != 0) {
        PreViwesQuetionsObject.QuesitonNum.forEach((Q) => {
          if (Q == QuestionNumberValue) {
            GenretQuestionNumber();
          }
        });
      }
      PreViwesQuetionsObject.QuesitonNum[Index] = QuestionNumberValue;
      PreViwesQuetionsObject.ChapterNum[Index] = ChapterValue;
      Index++;
      NumberForQuestion++;
    } else {
      QuestionNumberValue =
        PreViwesQuetionsObject.QuesitonNum[NumberForQuestion - 1];
      ChapterValue = PreViwesQuetionsObject.ChapterNum[NumberForQuestion - 1];
      if (PreviwesTime == 1) {
        Previwes = false;
      } else {
        PreviwesTime--;
      }
    }
    localStorage.setItem("QuestionobjReprort",JSON.stringify(PreViwesQuetionsObject))
  } else if (BtnType == "Previwes") {
    QuestionNumberValue =
      PreViwesQuetionsObject.QuesitonNum[NumberForQuestion - 1];
    ChapterValue = PreViwesQuetionsObject.ChapterNum[NumberForQuestion - 1];
    // NumberForQuestion--;
    Previwes = true;
    PreviwesTime++;
  }

  QuestionInEnglish =
    userId[ChapterValue][QuestionNumberValue].Question.English;
  QuestionInHindi = userId[ChapterValue][QuestionNumberValue].Question.Hindi;
  OptionsInEnglish =
    userId[ChapterValue][QuestionNumberValue].Options["English"];
  OptionsInHindi = userId[ChapterValue][QuestionNumberValue].Options["Hindi"];
  Answer = userId[ChapterValue][QuestionNumberValue]["Answer"];
  QuesitonNumberForCheckAnswer = QuestionNumberValue;
}
//<<====================== Fetching Data From LocalStorege and createing Object===============>>
let QuestionObject = JSON.parse(localStorage.getItem("Questiontext"));
const userId = QuestionObject;

//<<============== Full Object ,Question,Options,Answers Are Exportiong !!!!=================>>>
export {
  QuestionNumber,
  userId,
  QuestionInEnglish,
  QuestionInHindi,
  OptionsInEnglish,
  OptionsInHindi,
  Answer,
  QuesitonNumberForCheckAnswer,h
};
