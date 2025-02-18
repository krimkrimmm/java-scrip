const grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
];

// Function to calculate average grade
const calculateAverage = arr => arr.reduce((sum, student) => sum + student.grade, 0) / arr.length;

// 1. Average grade of the class
const classAverage = calculateAverage(grades);

// 2. Average grade of male students
const maleStudents = grades.filter(student => student.sex === 'M');
const maleAverage = calculateAverage(maleStudents);
// 3. Average grade of female students
const femaleStudents = grades.filter(student => student.sex === 'F');
const femaleAverage = calculateAverage(femaleStudents);

// 4. Male student with the highest grade
const topMaleStudent = maleStudents.reduce((top, student) => student.grade > top.grade ? student : top);

// 5. Female student with the highest grade
const topFemaleStudent = femaleStudents.reduce((top, student) => student.grade > top.grade ? student : top);

// 6. Male student with the lowest grade
const lowestMaleStudent = maleStudents.reduce((low, student) => student.grade < low.grade ? student : low);


// 7. Female student with the lowest grade
const lowestFemaleStudent = femaleStudents.reduce((low, student) => student.grade < low.grade ? student : low);

// 8. Highest grade in the class
const highestGrade = grades.reduce((max, student) => student.grade > max ? student.grade : max, 0);
 
// 9. Lowest grade in the class
const lowestGrade = grades.reduce((min, student) => student.grade < min ? student.grade : min, grades[0].grade);


// 10. List of all female students
const femaleStudentNames = femaleStudents.map(student => student.name);

// 11. Sort students by name in ascending order
const sortedByName = [...grades].sort((a, b) => a.name.localeCompare(b.name));

// 12. Sort students by grade in descending order
const sortedByGradeDesc = [...grades].sort((a, b) => b.grade - a.grade);


// 13. Female students with names starting with "J"
const femaleWithJ = femaleStudents.filter(student => student.name.startsWith('J'));

// 14. Top 5 students with the highest grades
const top5Students = [...grades].sort((a, b) => b.grade - a.grade).slice(0, 5);
 
// Output results to the console
console.log("Class Average:", classAverage);
console.log("Male Average:", maleAverage);

console.log("Female Average:", femaleAverage);
console.log("Top Male Student:", topMaleStudent);











console.log("Top Female Student:", topFemaleStudent);
console.log("Lowest Male Student:", lowestMaleStudent);
console.log("Lowest Female Student:", lowestFemaleStudent);
console.log("Highest Grade:", highestGrade);
console.log("Lowest Grade:", lowestGrade);
console.log("Female Students:", femaleStudentNames);

console.log("Sorted by Name:", sortedByName);
console.log("Sorted by Grade Descending:", sortedByGradeDesc);
console.log("Female Students with J:", femaleWithJ);
console.log("Top 5 Students:", top5Students);
// Output basic information on the webpage
const output = document.getElementById("output");
output.innerHTML = `<h3>Check the console for detailed results.</h3>`;




