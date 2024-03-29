let AdminObj = JSON.parse(localStorage.getItem("AdminInfo"));
let AdminObject = AdminObj;
let Student;
const StudentPassword = (StudentNumber) => {
  Student = `Student${StudentNumber}`;
  localStorage.setItem("LoginedStudent", Student);
  return AdminObject.Student[`Student${StudentNumber}`];
};

export { StudentPassword, AdminObject };
