 
var a = prompt("Input value for 'a' side triangle");
var h = prompt("Input value for 'h' side triangle");

function getTriangleArea(a,h){
	var triangleArea = a*h/2;
 
	if(a > 0 && h > 0){
		return "The triangle area is "+ triangleArea;
	} else {
		return "The triangle area can't be minus value";
	}
}

alert(getTriangleArea(a,h));