let timer=6;
let score=0;
let hitrn=0;

function makeBubble() {
  let clutter='';

for (let i = 1; i <=225; i++) {
  let rn=Math.floor(Math.random()*10);
 clutter+= `<div class="bubble">${rn}</div>`;
  
}
document.querySelector('.pbottom').innerHTML=clutter;
  
}
function runTimer() {
 

  let timerInt = setInterval(function () {
    if (timer>0) {
      timer--;
      document.querySelector('#timerVal').textContent=timer
  }
  else{
    clearInterval(timerInt);
    document.querySelector('.pbottom').innerHTML=`<h1> Game Over! </H1>`;
  }
   
  },1000); 
}
function incScore(){
  
  score+=10;
  document.querySelector('#scoreVal').textContent=score;

}
function setNewHit() {
 hitrn=Math.floor(Math.random()*10)
  document.querySelector('#setNewHit').textContent=hitrn;
  
}
document.querySelector('.pbottom').addEventListener('click',
  function (dets) {
    let clickedNum= Number(dets.target.textContent);
    if (clickedNum===hitrn) {
      incScore();
      makeBubble();
      setNewHit();
      
    }
    
  }
)

setNewHit();
runTimer();
makeBubble();
incScore();
