var computer = {
    price : 29000,
    storage : '156gb',
    color : 'black',
    processor : 'inter i8'
};
console.log(computer);
console.log(computer.processor);
var computerPrice = computer.price;

//set a object property value
computer.price = 22000;
//another way to set  object property
computer["price"] = 23000;
//another way to set  object property
var upgradeStorage = 'storage';
computer['storage'] = '1TB';
console.log(computer);
console.log(computerPrice);