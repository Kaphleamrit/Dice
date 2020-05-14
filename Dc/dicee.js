var ran1=Math.floor(Math.random()*6)+1;
var ran2=Math.floor(Math.random()*6)+1;
switch(ran1){
case 1:
document.querySelector(".img1").setAttribute("src" , "images/dice1.png");
break;
case 2:
document.querySelector(".img1").setAttribute("src" , "images/dice2.png");
break;case 3:
document.querySelector(".img1").setAttribute("src" , "images/dice3.png");
break;case 4:
document.querySelector(".img1").setAttribute("src" , "images/dice4.png");
break;case 5:
document.querySelector(".img1").setAttribute("src" , "images/dice5.png");
break;case 6:
document.querySelector(".img1").setAttribute("src" , "images/dice6.png");
break;
}
switch(ran2){
case 1:
document.querySelector(".img2").setAttribute("src" , "images/dice1.png");
break;
case 2:
document.querySelector(".img2").setAttribute("src" , "images/dice2.png");
break;case 3:
document.querySelector(".img2").setAttribute("src" , "images/dice3.png");
break;case 4:
document.querySelector(".img2").setAttribute("src" , "images/dice4.png");
break;case 5:
document.querySelector(".img2").setAttribute("src" , "images/dice5.png");
break;case 6:
document.querySelector(".img2").setAttribute("src" , "images/dice6.png");
break;
}
if(ran1>ran2){
	document.querySelector("h1").innerHTML="player 1 won!";
}
else if(ran1<ran2){
	document.querySelector("h1").innerHTML="player 2 won!";
}
else{
	document.querySelector("h1").innerHTML="Draw";
}

