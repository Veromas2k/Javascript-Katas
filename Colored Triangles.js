var stringInput = document.getElementById("stringInput");
var string;
var i;
var i1;
var newString ="";
var para;
var node;
var element;
var child;

function addRed(){
	document.getElementById("stringInput").innerHTML = document.getElementById("stringInput").innerHTML+"R";
}
function addGreen(){
	document.getElementById("stringInput").innerHTML = document.getElementById("stringInput").innerHTML+"G";
}
function addBlue(){
	document.getElementById("stringInput").innerHTML = document.getElementById("stringInput").innerHTML+ "B";
}

function calculate(){
	document.getElementById("strings").innerHTML = "";
	string = document.getElementById("stringInput").innerHTML;
	i = string.length;
	if(i == 1){
		print();
	}
	while( i > 1){
		i1 = i;
		while( i1 > 1){
			switch(string.substr(i-i1,2)){
				case "RR":
					newString = newString + "R";
					break;
				case "GG":
					newString = newString + "G";
					break;
				case "BB":
					newString = newString + "B";
					break;
				case "GB":
					newString = newString + "R";
					break;
				case "BR":
					newString = newString + "G";
					break;
				case "RG":
					newString = newString + "B";
					break;
				case "BG":
					newString = newString + "R";
					break;
				case "RB":
					newString = newString + "G";
					break;
				case "GR":
					newString = newString + "B";
					break;
			}	
			i1--;
		}
		string = newString;
		print();
		newString ="";
		i--;
	}
}

function print(){
	para = document.createElement("p");
	node = document.createTextNode(string);
	para.appendChild(node);
	element = document.getElementById("strings");
	child = document.getElementById("stringBottom");
	element.insertBefore(para,child);
}
function deleteS(){
	document.getElementById("stringInput").innerHTML = "";
	document.getElementById("strings").innerHTML = "";
}