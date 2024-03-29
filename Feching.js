// let Quesiton = document.querySelectorAll(".hdq_question_heading");
// let num = document.querySelectorAll(".hdq_question_number");
// console.log(Quesiton);
// Quesiton.forEach((el, index) => {
//   let v = el.innerText;
//   let q = "";
//   let n = "";
//   let g = 0;
//   let te;
//   let run = true;
//   for (let i = 0; v[i] != "?"; i++) {
//     if (v[i] != " " && run) {
//       // console.log(v[i]);
//       n += v[i];
//     } else {
//       run = false;
//     }
//     te = i < 10 ? num[index].innerText + " " : num[index].innerText;
//     if (n == te) {
//       console.log("Number");
//     }
//     q += v[i];
//   }
//   console.log(q);
//   console.log(n);
//   console.log(n.length);
//   console.log(te);
//   console.log(te.length);
// });

let Answer = document.querySelectorAll(".hdq_correct");
Answer.forEach((element) => {
  console.log(element.innerText);
});
