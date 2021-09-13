// Start Writing Code Here
//alert('hello world');

function showAlert(){
    alert('hello bangladesh');
}


const clickMeBtn = document.getElementById('btn-click-me');
//console.log(clickMeBtn)
clickMeBtn.onclick = function (){
    console.log('click me please')
}

const buim = document.getElementById('box1');
box1.addEventListener('click', function(){
    console.log('clicked on box1');
})

clickMeBtn.onclick = function(event){
    event.stopPropagation();
    console.log('button');
}

const inputs = document.querySelectorAll('input');
