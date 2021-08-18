function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//event handler using function
const bluebutton = document.getElementById('make-blue-button');
   bluebutton.onclick = makeblue;
   function makeblue(){
       document.body.style.backgroundColor = 'blue';
   }