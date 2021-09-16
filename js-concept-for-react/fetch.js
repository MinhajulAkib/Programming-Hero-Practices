// object convert in JSON
const student = {
    name: 'akib',
    age: 32,
    movies:['hello', 'dhakar mastan']
}
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

//JSON convert into object
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);