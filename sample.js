document.getElementById("first").innerHTML = "Good Evening...";
document.getElementById("first").style.color="blue";
var x=document.getElementsByClassName("head1");

x[0].innerHTML = "good morning..."; 
x[0].style.color="purple";
x[1].style.color="red";
x[2].style.color="green";

var w=document.getElementsByTagName("p");
w[1].style.color="yellow";

var a=document.getElementsByName("text")[0];
var b=document.getElementById("head");
function msg(){
    b.innerHTML= "hello " + a.value;
}


var a=document.querySelectorAll("h1");
console.log(a);

