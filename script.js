var firstextend = 0;
var secondextend = 0;

function extendfirst() {
	if (firstextend == 0) {
	document.getElementById("firstcontent").style.maxHeight = "130px";
	document.getElementById("firstcontent").style.padding = "20px";
	firstextend++;
	document.getElementById("firstsymbol").innerHTML = "-";
	} else {
	document.getElementById("firstcontent").style.maxHeight = "0px";
	document.getElementById("firstcontent").style.padding = "0px 20px";
	firstextend = 0;
	document.getElementById("firstsymbol").innerHTML = "+";
	}
}

function extendsecond() {
	if (firstextend == 0) {
	document.getElementById("secondcontent").style.maxHeight = "130px";
	document.getElementById("secondcontent").style.padding = "20px";
	firstextend++;
	document.getElementById("secondsymbol").innerHTML = "-";
	} else {
	document.getElementById("secondcontent").style.maxHeight = "0px";
	document.getElementById("secondcontent").style.padding = "0px 20px";
	firstextend = 0;
	document.getElementById("secondsymbol").innerHTML = "+";
	}
}