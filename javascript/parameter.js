function bringSingira(taka){
    console.log('singara er jonno dise', taka);
    console.log('mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 250;
var singara = bringSingira(money);
console.log('ai nen singara', singara);