//array
// let student = ['name', 'age', 'section', 'class'];
//console.log(student);
// console.log(student[1]);
// console.log(student.length);

// let first = student[0]
// let last = student[student.length -1];
// console.log(first);
// console.log(last);


//loop  over an array
// student.forEach(function(item, index, array) {
//     //console.log(item, index,array)
// })


//add an item to the end of an array
let student = ['name', 'age', 'section', 'class'];
let newadd = student.push('Orange');
//console.log(newadd);

let removedItem = student.splice(1);
//console.log(removedItem);


///copy an array
let shallowCopy = student.slice()
console.log(shallowCopy);

console.log(student);