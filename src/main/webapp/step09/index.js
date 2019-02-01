/*
const age = prompt("How old are you?")

if(age>18){
    alert("you can drink");
}else{
    alert("you cant");
}
*/

const title = document.querySelector("#title");

const  BASE_COLOR = "rgb(52, 73, 94)";
const  OTHER_COLOR = "#7f8c8d";


function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
    
}

function init(){
    title.addEventListener("click",handleClick)
}

init();


function handleOnline(){
    console.log("on");
}

function handleOffline(){
    console.log("off");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);