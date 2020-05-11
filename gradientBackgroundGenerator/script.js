var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");
var button = document.getElementById("btnRandom");

btnRandom.addEventListener("click", randomColor);

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);

function changeColor(){
	console.log(this.value);
	body.style.background = "linear-gradient(to right,"
	+color1.value +","+ color2.value+")"
	h3.textContent=body.style.background+";";
}

function randomColor(){
	color1.value = "#"+Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#"+Math.floor(Math.random()*16777215).toString(16);
	changeColor();
}

