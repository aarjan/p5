let bubbles = []


function setup() {
	createCanvas(600, 400);
	for (let i =0;i<4;i++){
		x = random(300)
		y = random(400)
		r = random(50,100)
		let b = new Bubble(x,y,r)
		bubbles.push(b)
	}
	
}
function draw() {

	background(0);
	for (b of bubbles) {
		b.display()
		b.move();
		for (other of bubbles){
			(b!= other && b.intersects(other))?b.changeColor(255):b.changeColor(0)
		}
		
	}
}

function mousePressed() {
	// for (b of bubbles) {
	// 	b.clicked(mouseX,mouseY)
	// }
}

class Bubble {
	constructor(x=200, y=150,r=25) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;
	}
	intersects(other) {
		let d = dist(this.x,this.y,other.x,other.y)
		return (d < (this.r+other.r)) 
	}

	changeColor(value){
		this.brightness=value
	}
	move() {
		this.x = this.x + random(-5,5)
		this.y = this.y + random(-5,5)	
	}

	display() {
		stroke(255);
		strokeWeight(4);
		fill(this.brightness)
		ellipse(this.x,this.y,this.r,this.r)
	}
}