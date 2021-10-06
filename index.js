var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;
var random3=Math.floor(Math.random()*6)+1;
var randomDI= "images/dice"+random1+".png";
var randomDI2= "images/dice"+random2+".png";
var randomDI3= "images/dice"+random3+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDI);
document.querySelectorAll("img")[1].setAttribute("src",randomDI2);
document.querySelectorAll("img")[2].setAttribute("src",randomDI3);

if (random1>random2 && random1>random3) {
	document.querySelector("h1").innerHTML="🚩Player 1 Win";
}
else if (random2>random1 && random2>random3) {
	document.querySelector("h1").innerHTML="Player 2 Win🚩";
}
else if (random3>random1 && random3>random2) {
	document.querySelector("h1").innerHTML="🚩Player 3 Win";
}
else{
	document.querySelector("h1").innerHTML="🚩DRAW🚩";
}
