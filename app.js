// massive/array -> []
var a=5;
// var massiveName = ['string','number','null','boolean'];
var too=[2,5,11,255,134];
console.log(too);
// index -> element buyu utgiin ezleh bairshliin dugaar
// index 0ees ehelne
// lenth -> massive dotorh utgiin buyu elementiin too
console.log(too[0]); // massiviin hamgiin ehnii utga
console.log(too[too.length-1]); // massiviin hamgiin suuliin utga 
console.log(too.length); 
too[0]="text";
console.log(too);
// for(var i=1;i<=10; i++0
for(var i=0; i<=too.length-1; i++){
	console.log(too[i]);
}
var number=[68,37,999,468,264];
console.log(number[0]+number[number.length-1]);
for(var i=0; i<=number.length-1; i++){
	if(number[i]%2==0){
		console.log("tegsh")
	}
	else{
		console.log("sondgoi")
	}
}
var too1=[46,24,256,36,2,64,4,63,56,86]
var niilber=0,urjver=1;
for(var i=0; i<=niilber.length-1; i++){
	niilber = niilber + too1[i];
	urjver = urjver + too1[i];
}
console.log(niilber);
console.log(urjver);
// change color project
var colors=['purple','blue','red','gray','yellow']
var body = document.getElementsByTagName('body')[0];
var up;
var autoBtn = document.querySelector('.autoBtn');
var stopBtn = document.querySelector('.stopBtn');
var  change= document.querySelector('.change');
console.log(body);

// Function
var i=-1;
function changeColor(){
	i++;
	body.style.backgroundColor=colors[i];
	change.innerText=colors[i];
	if(i>=colors.length-1){
		i=-1;
	}
}
function back(){
	if(i<=0){
		i=colors.length;
	}
	i--;
	body.style.backgroundColor=colors[i];
}
function auto(){
		i++;
	body.style.backgroundColor=colors[i];
	if(i>=colors.length-1){
		i=-1;
	}
	 up = setTimeout(auto,1500)
	 autoBtn.disabled = true
	 stopBtn.disabled = false
}
// scope -> global var, ni haana ch hamaagu ajilladag
function stop(){
	clearTimeout(up);
	stopBtn.disabled = true
	autoBtn.disabled = false
}

// setTimeout -> ymr neg kod heden secondiin daraa ajillahiig tohiruulna.
// clearTimeout -> setTimeout-iig zogsoono
function hello(){
	console.log('hello');
}
setTimeout(hello,3000);
