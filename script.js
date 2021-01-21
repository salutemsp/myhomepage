let h2 = document.getElementById("gm");
let body = document.getElementsByTagName("body");



function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function Timer() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
 
  h = checkTime(h);
  m = checkTime(m);

  document.getElementById('time').innerHTML = h + ":" + m ;
  setTimeout("Timer()",1000);

  if(h >= 6 && h<12){
  	h2.textContent ="Good morning,Sean."
  ;}
  else if(h > 11 && h<=12){
  	h2.textContent ="Good noon,Sean."
  ;}
  else if(h > 12 && h<=17){
    h2.textContent ="Good afternoon,Sean."
  ;}
  else if(h >=18 && h<24){
  	h2.textContent ="Good evening,Sean."
  ;}
  else if(h <=1 && h<=3){
    h2.textContent ="Hey maybe you should rest."
  ;}
  else if(h <=4 && h<=5){
    h2.textContent ="Youre early today,Whats up?."
  ;}
};

Timer();
