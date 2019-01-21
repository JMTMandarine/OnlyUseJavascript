const title = document.querySelector("#title");

title.innerHTML = "Hi! From JS";

title.style.color = 'blue';
	
document.title = 'I own your now';

function handleClick(){
    title.style.color='red';
}

title.addEventListener("click", handleClick);
