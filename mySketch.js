var canvas;
var h1;

function setup()  {
	canvas = createCanvas(200, 200);
	background(100);
	h1 = createElement("h1","i am h1 <i><u>heading</u></i>");
	canvas.position (400,400);
}
function mousePressed() {
	createP("My Fav Color");
}
function draw() {
	ellipse(mouseX, mouseY, 20, 20);
	h1.position(mouseX, mouseY);
	}
