const title = document.querySelector("titile");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const currenClass = title.className;
    if(currenClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else{
        title.className ="";
    }
}

title.addEventListener("Click", handleClick);