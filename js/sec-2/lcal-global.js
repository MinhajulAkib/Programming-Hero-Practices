// global variable
var message = "Hello";
function say() {
    // local variable
    var message = 'Hi';
    console.log(message); // which message?
}
say();// Hi
console.log(message); // Hello