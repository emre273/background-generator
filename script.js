var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".rndButton");


function setGradient() {
    body.style.background="linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}


console.log(Math.random()*255)


function rndColor() {
    body.style.background="linear-gradient(to right, rgb(" 
    + Math.random()*255+", "+Math.random()*255+", "+Math.random()*255+")"
    + ", rgb(" 
    + Math.random()*255+", "+Math.random()*255+", "+Math.random()*255+")"
    + ")";
    css.textContent = body.style.background + ";";  
    
}




button.addEventListener("click", rndColor)

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);