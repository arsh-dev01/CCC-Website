let FullBook = document.getElementById("FullBookDiv");
let ChapterArray = document.querySelectorAll(".ChapterNameAndNumber");
let QuestionType;
let ChpaterNumber;
let ChapterWisePopUp = document.querySelector(".ChaptersPopBG");
let ChapterWiseBox = document.querySelector(".ChapterWiseQuestion");
let ChapterQuestions = document.querySelector(".ChapterQuestions");
let ChapterButton = document.querySelectorAll(".ChapterButton");
let ChapterMock = document.querySelector(".ChapterMock");
let ChapterMCQ = document.querySelector(".ChapterMCQ");
ChapterWiseBox.onclick = () => {
  localStorage.setItem("QuestionType", "Chapter Wise");
  ChapterWisePopUp.style.display = "flex";
  localStorage.setItem("TestType", "MockTesting");
};
// ChapterArray.forEach((element) => {
//   element.addEventListener("click", () => {
//     FullBookPopUp();
//   });
// });
const ChapterPopUp = () => {
  localStorage.setItem(
    "QuestionNum",
    ChapterQuestions.options[ChapterQuestions.selectedIndex].value
  );
};
ChapterPopUp();
ChapterQuestions.onchange = () => {
  localStorage.setItem("QuestionType", "Chapter Wise");
  ChapterPopUp();
};
ChapterButton.forEach((Btn) => {
  Btn.addEventListener("click", () => {
    ChpaterNumber = Btn.getAttribute("id");
    localStorage.setItem("ChapterNumber", ChpaterNumber);
    window.open("QuestionPenal.html", "_self");
  });
});

ChapterMock.addEventListener("click", () => {
  ChapterMock.classList.add("Active");
  ChapterMCQ.classList.remove("Active");
  localStorage.setItem("TestType", "MockTesting");
});

ChapterMCQ.addEventListener("click", () => {
  ChapterMock.classList.remove("Active");
  ChapterMCQ.classList.add("Active");
  localStorage.setItem("TestType", "MCQTesting");
});
// <<<<<<<<<<<<============Chapter PopUp Dislay None============>>>>>>>>>>>>
ChapterWisePopUp.onclick = (event) => {
  if (event.target === event.currentTarget) {
    event.target.style.display = "none";
  }
  // alert();
};
const FullBookPopUp = () => {
  let PopBox = document.querySelector(".MockPopUp");
  PopBox.style.display = "flex";
  PopBox.onclick = (event) => {
    if (event.target === event.currentTarget) {
      event.target.style.display = "none";
    }
  };
};
// ===========FullBook Div OnClick Pop ========================>>>>>>>>>>>>>
FullBook.addEventListener("click", () => {
  localStorage.setItem("QuestionType", "Full Book");
  // window.open("QuestionPenal.html", "_self");
  FullBookPopUp();
});

//>>>>>>>>>>>>>>=========FullBook Total Quesitons=========>>>>>>>>>>>>>>
let FullBookTotalQNumber = document.querySelector(".FullBookQuestions");
let QuestionNum;
const GetNum = () => {
  localStorage.setItem(
    "QuestionNum",
    FullBookTotalQNumber.options[FullBookTotalQNumber.selectedIndex].value
  );
};
GetNum();
FullBookTotalQNumber.addEventListener("change", (Op) => {
  GetNum();
});
// <<<<<<<<<<<<<<<<==OnClick Button Full Book ==================>>>>>>
let MockBtn = document.querySelector(".FullBookMockbtn");
let MCQBtn = document.querySelector(".FullBookMCQbtn");

MockBtn.addEventListener("click", () => {
  localStorage.setItem("TestType", "MockTesting");
  window.open("QuestionPenal.html", "_self");
});
MCQBtn.addEventListener("click", () => {
  localStorage.setItem("TestType", "MCQTesting");
  window.open("QuestionPenal.html", "_self");
});
let ChpaterArray = ["chapter1", "chapter2", "chapter3", "chapter6"];
console.log(ChpaterArray[Math.floor(Math.random() * ChpaterArray.length)]);
