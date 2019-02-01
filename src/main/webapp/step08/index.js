const title = document.querySelector("#title");

function handleResize(){
    console.log("I have been resized");
}

window.addEventListener("resize", handleResize);
// window.addEventListener("resize", handleResize());
// handleResize 선언시 이벤트발생시 실행
// handleResize() 선언시 일단 무조선 실행


function handleClick(){
    title.style.color="red"    
}

title.addEventListener("click",handleClick)
