// import { HeaderData } from "./Header.js";

// document.querySelector("header").innerHTML = HeaderData;

// window.addEventListener("DOMContentLoaded", () => {
//   console.log("fdsfsffdsfLoded");
// });
// window.addEventListener("load", function () {
//   console.log("Loded");
// });
// // import { today } from "./StudentLogin.js";
// // console.log("today");
// // console.log(today);
let reportbtn=document.querySelector(".Report");
let CurrentPath=window.location.pathname;
reportbtn.onclick=()=>{
    if(CurrentPath!="/Page/Report.html"){
        localStorage.setItem("CurrentPath",CurrentPath);
        window.open("Report.html");
         if(CurrentPath=="/Page/QuestionPenal.html"){
            
        }
    }else if(CurrentPath=="/Page/QuestionPenal.html"){
        alert("Usering")
    }
}
// console.log(PreViwesQuetionsObject);