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
//console.log(shallowCopy);
//concat 3 numbers
console.log(student);
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

// console.log(numbers);
// // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]





let str = new String('JavaScript String Type');
//console.log(str.valueOf());
//console.log(str.toString());
//console.log(str.toLocaleString());


//arrow function
const addThree = (x, y, z) => x +y + z;
    //{
    //  const sum =x +y + z;
    //  return sum;
    //}
console.log(addThree(2,4,5))