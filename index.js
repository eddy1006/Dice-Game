var arr = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png']
var random1 = Math.floor(Math.random() * 6);
var random2 = Math.floor(Math.random() * 6);
var pl1 = document.getElementById("p1");
var pl2 = document.getElementById("p2");
pl1.src = arr[random1];
pl2.src = arr[random2];
if(random1 > random2){
  var title = document.getElementById("winner");
  title.innerHTML = "Player 1 wins";
}else if(random2 > random1){
  var title = document.getElementById("winner");
  title.innerHTML = "Player 2 wins";
}else{
  var title = document.getElementById("winner");
  title.innerHTML = "It's a Draw";
}
