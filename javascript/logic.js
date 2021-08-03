var fruitNames = ['mango', 'orange', 'berry', 'banana', 'jackfruit', 'lichie'];
console.log(fruitNames);
fruitNames = fruitNames.unshift('avacado');
console.log(fruitNames);
var isTruckAvailable = false;
var isTrainAvailable = true;

if(isTruckAvailable == true || isTrainAvailable == true){
    // fruitNames = fruitNames.unshift('avacado');
    for(var i = 0; i < fruitNames.length -2; i++){
        var singleFruit = fruitNames[i];
        console.log(singleFruit);
    }
   
}

else{
    console.log("error");
}