function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//event handler using function
const bluebutton = document.getElementById('make-blue-button');
   bluebutton.onclick = makeblue;
   function makeblue(){
       document.body.style.backgroundColor = 'blue';
   }

   //event handler by using anonymus function
   const greenbutton = document.getElementById('make-green-button');
   greenbutton.onclick=function(){
       document.body.style.backgroundColor = 'green';
   }