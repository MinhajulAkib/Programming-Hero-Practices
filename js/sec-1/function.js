//declare a function
function add (a, b){
    return a + b;
}
const result = add(2, 4);
console.log(result);


// Now, you should see 30 in the console window.
let a = 20;
b= 10;

function divide (a, b){
    if (b == 0){
        throw 'division by zero'
    }
    return a/b;
}
const res = divide(10, 2);
console.log(res);