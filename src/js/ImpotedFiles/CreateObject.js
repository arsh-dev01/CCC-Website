let TotalClick = localStorage.getItem("TotalClick");
let div = document.querySelector(".text");
console.log(div);
let obj;
let QuesitonObj = localStorage.getItem(`Questiontext`);
obj = JSON.parse(QuesitonObj);
console.log(obj);
div.value += JSON.stringify(obj);
