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
//<<<<<<<<<<<<<<<<<<Select Result box >>>>>>>>>>>>>>>>>>>>>
let ResultBody = document.querySelector(".ResultData");
let LastTimer;
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
  let TimeDiv = document.createElement("div");
  Row.classList.add("DataRow");
  TimeDiv.classList.add("TimeBox");
  TimeDiv.innerText = "Time - ";
  if (LastTimer != Time) {
    console.log(Time);
    ResultBody.appendChild(TimeDiv);
    TimeDiv.innerText += Time;
  }
  ResultBody.appendChild(Row);
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
          LastTimer = Time;
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
const ResultShow = (Result, day, Student, Time, SrNo) => {
  let StudentName = Result.StudentName;
  let QuestionType = Result.QuestionType;
  let TotalQuestion = Result.TotalQuestion;
  let TotalRightAnswer = Result.TotalRightAnswer;
  let ChapterNumber = Result.ChapterNumber;
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
  if (SrNo > 12) {
    SrNo = 1;
  }
  Result = JSON.parse(localStorage.getItem("Results"));
  if (Result[day]) {
    let TimerArr = Object.keys(Result[day]);
    for (let i = 0; i < TimerArr.length; i++) {
      let Time = TimerArr[i];
      for (let i = 1; i <= 12; i++) {
        let Student = `Student${i}`;
        if (Result[day][Time][Student]) {
          let StudneObj = Result[day][Time][Student];
          ResultShow(StudneObj, day, Student, Time, SrNo);
          SrNo++;
        }
      }
    }
  }
};
ResultLoop(today);

export { today, CreateRow };
let DateInput = document.querySelector(".Date");
DateInput.addEventListener("change", (e) => {
  ResultBody.innerHTML = "";
  let DateValue = e.target.value;
  ResultLoop(DateValue);
});
