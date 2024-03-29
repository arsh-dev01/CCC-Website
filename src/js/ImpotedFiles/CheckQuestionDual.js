import {
  QuesitonInEnglish,
  QuesitonInHindi,
  AnswerInEnglish,
  AnswerInHindi,
  OptionsEnglish,
  OptionsHindi,
} from "./AddQuestions.js";
let OneTime;
let RealObject = JSON.parse(localStorage.getItem("Questiontext"));
const CheckDual = () => {
  OneTime = true;
  for (let i = 0; i < Object.keys(RealObject).length; i++) {
    let Obj = RealObject[Object.keys(RealObject)[i]];
    for (let j = 1; j <= Object.keys(Obj).length; j++) {
      let English = Obj[Object.keys(Obj)[j - 1]][`Question`]["English"];
      let Hindi = Obj[Object.keys(Obj)[j - 1]][`Question`]["Hindi"];
      Checking(English, Hindi);
    }
  }
};
const Checking = (English, Hindi) => {
  if (
    English != QuesitonInEnglish.value &&
    Hindi != QuesitonInHindi.value &&
    OneTime
  ) {
    OneTime = false;
    alert("Quesiton Are Same");
  }
};
export { CheckDual };
