import listOfStudents, { HolbertonClass, StudentHolberton } from '../9-hoisting';
const assert = require('assert');

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
  (student) => student.fullStudentDescription,
);

console.log(listPrinted);
console.log(listOfStudents[0].holbertonClass instanceof HolbertonClass);
console.log(listOfStudents[0] instanceof StudentHolberton);
