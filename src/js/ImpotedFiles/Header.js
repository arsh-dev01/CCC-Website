let NavArray;
NavArray = ["Home", "Report", "About", "Logout"];
let CatrantPageLocation = localStorage.getItem("CetrantPageLocation");
console.log(CatrantPageLocation);
if (CatrantPageLocation == "AfterStudent") {
  NavArray = ["Change User", "CCC", "About", "Admin"];
} else if (CatrantPageLocation == "AfterAdmin") {
  NavArray = ["Edit Admin Info", "Edit Student Info", "Add Question", "Result"];
}
let HeaderData = `
     <div class="HeaderDublecatDiv">
    <div class="HeaderContenar">
      <div class="headerLogodiv">Code   - Stack</div>
      <nav class="Nav">
        <a href="AfterStudentLogin.html" class="navBtn OLavel"
          >${NavArray[0]}</a
        >
        <a href="#" class="navBtn CCC" onclick="alert()">${NavArray[1]}</a>
        <a href="#" class="navBtn About">${NavArray[2]}</a>
        <a href="StudentLoginspage.html" class="navBtn Admin">${NavArray[3]}</a>
      </nav>
    </div>
  </div>
  <script>
  </script>
`;
export { HeaderData };
