
function dropdFunction(){
    document.getElementById("mydropdown").classList.toggle("show");
} 

window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
         var dropdowns = document.getElementsByClassName("dropdown-content");
         var i;
         for(i=0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
         }
    }
}
var inter;
$(document).ready(function(){
    inter = setInterval(function(){
        $('images').append('<<img src="IMG-20230310-WA0025.jpg" height="250px" width="90%" onclick="myFunction(this)"/>');

    },1000);
});
var counter = 0;
function myFunction(img){
    counter++;
    document.getElementById('countervalue').innerHTML = counter;
    img.onclick = null ;
    img.remove();
    if(counter === 20){
        clearInterval(inter);
    }
}
