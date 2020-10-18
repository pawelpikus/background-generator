var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button")

setGradient();

function setGradient(){
    body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
    css.textContent = body.style.background + ";";
}

function generateRandomHexColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}

function setRandomGradient(){
    var randomColor1 = generateRandomHexColor();
    var randomColor2 = generateRandomHexColor();
    body.style.background = "linear-gradient(to right, #"+randomColor1+", #"+randomColor2+")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomGradient);
