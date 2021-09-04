function multiply (a, b){
    return a * b;
}
function square(n){
    return multifly(n, n);
}
function printSquare (n){
    var squared = square (n);
    console.log(squared);
}
printSquare(4);