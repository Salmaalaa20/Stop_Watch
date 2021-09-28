console.log(window.document.write("<div id='stopwatch'>00:00</div>"+
"<ul id='buttons'><li><button onclick='startTimer()'>Start</button></li>"+
"<li><button onclick='stopTimer()'>Stop</button></li>"+
"<li><button onclick='resetTimer()'>Reset</button></li></ul>"));

timer = document.getElementById('stopwatch');
var min = 0;
var sec = 0;
var stoptime = true;
function startTimer(){
  if(stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer(){
  if (stoptime == false) {
    stoptime = true;
  }
}
function timerCycle(){
    if (stoptime == false){
    sec = parseInt(sec);
    min = parseInt(min);
    sec += 1;
    if (sec == 60) {
      min += 1;
      sec = 0;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    timer.innerHTML= min + ':' + sec;
    setTimeout("timerCycle()", 1000);
  }
}
function resetTimer(){
    timer.innerHTML ='00:00';
    stoptime = true;
    sec = 0;
    min = 0;
}