var randomVariable1=Math.floor(Math.random()*6)+1;

var imgsrc1="dice"+randomVariable1+".png";

var imsr1="images/"+imgsrc1;

var image1=document.getElementsByClassName("img1")[0];
image1.setAttribute("src",imsr1);

var randomVariable2=Math.floor(Math.random()*6)+1;

var imgsrc2="images/dice"+randomVariable2+".png";

var image2=document.getElementsByClassName("img2")[0].setAttribute("src",imgsrc2);

var heading=document.querySelector("h1");

if(randomVariable1>randomVariable2){
    heading.innerHTML="Player 1 wins!";
}
else if(randomVariable2>randomVariable1){
    heading.innerHTML="Player 2 wins!";
}
else{
    heading.innerHTML="Draws";
    
}