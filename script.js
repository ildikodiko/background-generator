var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	console.log(color1.value);

	css.textContent = body.style.background + " ugye jo";
}

function randomNumberToHex() {
	var randomColorNumber = Math.floor((Math.random() * 255) + 1);
	var hex = Number(randomColorNumber).toString(16);
	if (hex.length < 2) {
		hex = "0" + hex;
	}
	return hex;
}

function randomRrgbToHex() {	
	var red = randomNumberToHex();
	var green = randomNumberToHex();
	var blue = randomNumberToHex();
	var randomHex = '#' + red + green + blue;
	return randomHex;
}

function setRandomGradient() {
	color1.value = randomRrgbToHex();
	color2.value = randomRrgbToHex();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomGradient);