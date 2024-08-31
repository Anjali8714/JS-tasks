var heading=document.getElementById("head");
var btn=document.getElementById("btn");


btn.addEventListener("click",changecolor);
heading.addEventListener("mo",changeBg);


function changecolor(){
    heading.style.color="red"
}

function changeBg(){
    heading.style.backgroundColor="cyan";
}