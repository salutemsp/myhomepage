// var dt = new Date();
// document.getElementById("time").innerHTML = (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

let h2 = document.getElementById("gm");

let body = document.getElementsByTagName("body")


function Timer() {
   let dt=new Date()
   document.getElementById('time').innerHTML=dt.getHours()+":"+dt.getMinutes();
   setTimeout("Timer()",1000);
}
Timer();



function greet(Timer){
	if (Timer>= "18:00"){
		h2.textContent ="Good Evening Sean"
		setTimeout("greet(Timer)",1000);
		
	}
	else if(Timer>= "06:00"){
		h2.textContent ="Good Morning Sean"
		setTimeout("greet(Timer)",1000);

	}
	else if(Timer>= "12:00"){
		h2.textContent ="Good Noon Sean"
		setTimeout("greet(Timer)",1000);
}};

greet(Timer);