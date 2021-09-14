//array
let student = ['name', 'age', 'section', 'class'];
// console.log(student);
// console.log(student[1]);
// console.log(student.length);

let first = student[0]
let last = student[student.length -1];
// console.log(first);
// console.log(last);


//loop  over an array
student.forEach(function(item, index, array) {
    console.log(item, index,array)
  })