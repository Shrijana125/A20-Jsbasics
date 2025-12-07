// const collegeName = ["Srijana", "Ritu", "Yudina"];
// const name = {
//     id: 1,
//     firstname: "deeya",
//     colleges: collegeName,
// };
// console.log(collegeName[2]);
// console.log(name.firstname[2]);

const students = ["Sita", "Gita", "Shyam", "Hari"];
console.log(students.length);

const collegeDetails = {
    name: "techspire",
    section: 20,
    students: students,
    award: null,
};

console.log(collegeDetails.students[3]);


getStudentName();
function getStudentName() {
    console.log("Iam normal func");
}


const getCollegeName = () => {
    console.log("Iam arrow func");
};
getCollegeName();

// console.log(abc);
// var abc = "Anil";