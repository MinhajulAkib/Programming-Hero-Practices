if (3 < 5) { 
    console.log ('yeah!, i will be excuated');
}


var myName = 'minhajul';
if (myName === 'minhaj'){
    console.log('ok,executed')
}
else{
    console.log('not ,it not minhaul');
}


// else---if
var whatsDay = 'sunday';
if (whatsDay == 'friday'){
    console.log("today is closed day");
}
else if (whatsDay == 'monday'){
    console.log("today is partially closed");
}
else if(whatsDay == 'saturday'){
    console.log("today is gov't holiday");
}
else{
    console.log("office day")
}


// Nesting condition

var num = 10;
if (num >1){
    if (num > 7){
        console.log('right');
    }
    else{
        console.log('wrong');
    }
}

// ------

var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;
if(danishPrice < myBudget){
    console.log("danish khaye danish jabo");
}
else if(butterBreadPrice < myBudget){
    console.log("butter bon diye cha khamu");
}
else if(toastBiscuitPrice < myBudget){
    console.log("batashsa diye cha khamu");
}
else{
    console.log("mara khamu");
}



