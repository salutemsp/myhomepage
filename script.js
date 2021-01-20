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
  // add a zero in front of numbers<10
  h = checkTime(h);
  m = checkTime(m);

  document.getElementById('time').innerHTML = h + ":" + m ;
  setTimeout("Timer()",1000);

  if(h >= 6){
  	h2.textContent ="Good Morning Sean"
  ;}
  else if(h >= 12){
  	h2.textContent ="Good Noon Sean"
  ;}
  else if(h >=18){
  	h2.textContent ="Good Evening Sean"
  ;}
};

Timer();

