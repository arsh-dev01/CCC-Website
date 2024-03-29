// Create Admin Anchar Tag Href on Result Page
let AdminAncar = document.querySelector(".Admin");
AdminAncar.href = "../Admin Loging Page.html";
//<<<<=============================Declaration of Data varabel=========>>>>>>
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;
let StudentResultObject = {
  StudentName: "",
  QuesionType: "",
  TotalQuestion: "",
  TotalRightAnswer: "",
};
// console.log(today);
//<<<<<<<<<<<<<<<<<<Select Result box >>>>>>>>>>>>>>>>>>>>>
let ResultBody = document.querySelector(".ResultMainBox");
//<<<<<<<<Create Element And Append In Result Box and Fill Data >>>>>>>
const CreateRow = (
  StudentName,
  QuestionType,
  TotalQuestion,
  TotalRightAnswer,
  ChapterNumber,
  Time,
  SrNo,
  Student,
  day
) => {
  // Start
  let Row = document.createElement("div");
  ResultBody.appendChild(Row);
  Row.classList.add("DataRow");
  for (let i = 1; i <= 8; i++) {
    let Cell = document.createElement("h5");
    switch (i) {
      case 1:
        if (SrNo != undefined && SrNo != "") {
          today;
          Cell.innerHTML = SrNo;
        } else {
          Cell.innerHTML = "-";
        }
        break;
      case 2:
        if (today != undefined && today != "") {
          Cell.innerHTML = day;
        } else {
          Cell.innerHTML = "-";
        }
        break;
      case 3:
        if (Time != undefined && Time != "") {
          Cell.innerHTML = Time;
        } else {
          Cell.innerHTML = "-";
        }
        break;
      case 4:
        if (Student != undefined && Student != "") {
          Cell.innerHTML = Student;
        } else {
          Cell.innerHTML = "-";
        }
        break;
      case 5:
        if (StudentName != undefined && StudentName != "") {
          Cell.innerHTML = StudentName;
        } else {
          Cell.innerHTML = "-";
        }
        break;
      case 6:
        if (QuestionType != undefined && QuestionType != "") {
          // console.log(QuestionType);
          if (QuestionType != "Chapter Wise") {
            Cell.innerHTML = QuestionType;
          } else {
            Cell.innerHTML = `Chapter-${ChapterNumber}`;
          }
        } else {
          Cell.innerHTML = "-";
        }
        break;
      case 7:
        if (TotalQuestion != undefined && TotalQuestion != "") {
          Cell.innerHTML = TotalQuestion;
        } else {
          Cell.innerHTML = "-";
        }
        break;
      case 8:
        if (TotalRightAnswer != undefined && TotalRightAnswer != "") {
          Cell.innerHTML = TotalRightAnswer;
        } else {
          Cell.innerHTML = "-";
        }

        break;
      default:
        break;
    }
    Row.appendChild(Cell);
  }
  // End>>>>>>>>>>>
};

// for (let i = 1; i <= 12; i++) {
//   StudentResultObject.StudentName = `Arsh${i}`;
//   StudentResultObject.TotalRightAnswer = i * 5;
//   StudentResultObject.QuestionType = "Full";
//   StudentResultObject.TotalQuestion = 100;
//   localStorage.setItem(
//     `${"2024-02-14"}-${`Student${i}`}`,
//     JSON.stringify(StudentResultObject)
//   );
// }
// >>>>>>>>>>>>>>>Fetching Student result Data on Function call-=======>>>
const ResultShow = (Result, SrNo, Student, day) => {
  let StudentName = Result.StudentName;
  let QuestionType = Result.QuestionType;
  let TotalQuestion = Result.TotalQuestion;
  let TotalRightAnswer = Result.TotalRightAnswer;
  let ChapterNumber = Result.ChapterNumber;
  let Time = Result.Time;
  CreateRow(
    StudentName,
    QuestionType,
    TotalQuestion,
    TotalRightAnswer,
    ChapterNumber,
    Time,
    SrNo,
    Student,
    day
  );
};
let Result;
const ResultLoop = (day) => {
  let SrNo = 1;
  console.log(day);
  if (SrNo > 12) {
    SrNo = 1;
  }
  for (let i = 1; i <= 12; i++) {
    Result = localStorage.getItem(`${day}-Student${i}`);
    let Student = `Student${i}`;

    if (Result != null) {
      ResultShow(JSON.parse(Result), SrNo, Student, day);
      SrNo++;
    } else {
      continue;
    }
  }
};
ResultLoop(today);

export { today, CreateRow };
let DateInput = document.querySelector(".Date");
DateInput.addEventListener("change", (e) => {
  let ResultData = document.querySelector(".ResultData");
  ResultData.innerHTML = "";
  let DateValue = e.target.value;
  ResultLoop(DateValue);
});
