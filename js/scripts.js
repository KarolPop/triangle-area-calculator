 
function getTriangleArea(a,h){
	a = prompt("Input value for 'a' side triangle");
	h = prompt("Input value for 'h' side triangle");
	var triangleArea = a*h/2;

	if(a > 0 && h > 0){
		return "The triangle area is "+ triangleArea;
	} else {
		return "The triangle area can't be minus value";
	}
}


alert(getTriangleArea());