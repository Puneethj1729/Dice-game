var randomNumber1=Math.floor(Math.random()*6)+1;
var img='images/dice'+randomNumber1+'.png';
document.querySelectorAll('img')[0].setAttribute('src',img);
var randomNumber2=Math.floor(Math.random()*6)+1;
var img2='images/dice'+randomNumber2+'.png';
document.querySelectorAll('img')[1].setAttribute('src',img2);
if (randomNumber1>randomNumber2){
  document.querySelector('#result').innerHTML="💥Player1 Won the game💥";
}
else if(randomNumber1<randomNumber2){
  document.querySelector('#result').innerHTML="💥Player2 Won the game💥";
}
else{
  document.querySelector('#result').innerHTML="💥Draw💥";
}
