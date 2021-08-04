function addTwoNumbers(number1, number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
var firstNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log('result value:', result);


function multiplyTwoNumbers(n1 , n2){
    var mult = n1 * n2;
    return mult;
}

// var a = 12;
// var b = 4;
// var c = multiplyTwoNumbers(a, b);
// console.log('multiplied numbers:', c);
var total = multiplyTwoNumbers(12, 4);
console.log('result value:', total);