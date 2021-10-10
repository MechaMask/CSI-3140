var id_empty;
var num_moves;
var isCompleted = false;
var time=0;
var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

window.addEventListener("load", startTimer, false);
window.addEventListener("load", startPuzzle, false);

function startTimer()
{
window.setInterval("updateTime()", 1000);
}

function updateTime()
{
++time;
document.getElementById("time").innerHTML ="Time spent in current game: " +time +" (seconds)";
}

function startPuzzle() {
num_moves = 0;
isCompleted = false;

for(var i=0; i < 16; i++) {
var tmp = document.getElementById(i);
tmp.className = "cell ";
}

randomNumber = shuffle(nums);
while(!is_solvable(randomNumber)) {
randomNumber = shuffle(nums);
}

for(var i=0; i < 16; i++) {
var tmp = document.getElementById(i);
if(randomNumber[i] == 16) {
tmp.className = "cell empty";
tmp.innerHTML = "";
id_empty = i;
}
else
tmp.innerHTML = randomNumber[i];
}

}
function easyGame(){
if(isCompleted)
{
window.location.reload();
}
time = 0;
num_moves = 0;
document.getElementById("moves").innerHTML = "Moves so far: " + num_moves;
for(var i=0; i < 16; i++) {
var tmp = document.getElementById(i);
if(i == 14) {
tmp.className = "cell empty";
tmp.innerHTML = "";
id_empty = i;
}
else if(i == 15) {
tmp.className = "cell";
tmp.innerHTML = "15";
}
else{
tmp.innerHTML = i+1;
tmp.className = "cell";
}
}
}


function clickCell(x)
{
if(isCompleted)
return;

if(x.id != id_empty+'') {
var emptyI = Math.floor(id_empty/4);
var emptyJ = id_empty % 4;
var id_selected = Number(x.id);
var selectedI = Math.floor(id_selected/4);
var selectedJ = id_selected % 4;

if((Math.abs(emptyI - selectedI) == 1 && emptyJ == selectedJ) ||
(Math.abs(emptyJ - selectedJ) == 1 && emptyI == selectedI)) {

document.getElementById(id_empty).className = "cell";
document.getElementById(id_empty).innerHTML = x.innerHTML;

x.className = "cell empty";
x.innerHTML = '';

id_empty = id_selected;
num_moves++;

document.getElementById("moves").innerHTML = "Moves so far: " + num_moves;

if(isDone()){
isCompleted = true;
document.getElementById("moves").innerHTML = "CONGRATS! Number of moves it took to complete: " + num_moves;
}
}
}
}

function isDone() {
return document.getElementById('0').innerHTML == '1' &&
document.getElementById('1').innerHTML == '2' &&
document.getElementById('2').innerHTML == '3' &&
document.getElementById('3').innerHTML == '4' &&
document.getElementById('4').innerHTML == '5' &&
document.getElementById('5').innerHTML == '6' &&
document.getElementById('6').innerHTML == '7' &&
document.getElementById('7').innerHTML == '8' &&
document.getElementById('8').innerHTML == '9' &&
document.getElementById('9').innerHTML == '10' &&
document.getElementById('10').innerHTML == '11' &&
document.getElementById('11').innerHTML == '12' &&
document.getElementById('12').innerHTML == '13' &&
document.getElementById('13').innerHTML == '14' &&
document.getElementById('14').innerHTML == '15';
}
function shuffle(array) {


  //starts from the end
  var current = array.length;
  var random;
  var temp;

  // While there remain elements to shuffle
  while (0 !== current) {

    // Pick an element randomly
    random = Math.floor(Math.random() * current);

    //decrease the index that we use  to shuffle
    current -= 1;

    // And swap the random pciked element with the current element.
    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }
  return array;
}


function is_solvable(start){
  clone = start.slice(0);
  clone.splice(clone.indexOf(16), 1);
  clone[15] = 16;
  var count = 0;
  for(var i = 0; i < 15; i++) {
  if(clone[i] != i+1) {
  count++;
  var j = clone.indexOf(i+1);
  clone[j] = clone[i];
  clone[i] = i+1;
  }
  }
  return count % 2 == 0;
}
