// JavaScript Document
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump(){
	character.classList.add("animate");
		setTimeout(function() {
	character.classList.remove("animate");		
		},300);	
}
var checkDead = setInterval(function() {
let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if (blockLeft < 120 && blockLeft > 0 && characterBottom < 100) {
	block.style.animation = "none";
	alert("Game Over. score: "+Math.floor(counter/100));
	counter=0;
	block.style.animation = "block 1s infinite linear";
}else{
	counter++;
	document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
	}
}, 10);



