var circles = []
var canvas;
var ctx;
var w;
var h;
var mousePos = {x:0,y:0};

window.onload = function() {
    w = screen.width;
	h = screen.height;
	
	canvas = document.getElementById('canvas');
    canvas.width = w;
    canvas.height = 465
	
	ctx = canvas.getContext("2d");
	
	
	canvas.addEventListener('mousemove', function(evt) {
    mousePos = getMousePos(canvas, evt);
    //console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
	}, false);
	
	
	canvas.addEventListener ("mouseout", mouseOut, false);
	
	initCircles();
	updateCanvas();
	
	window.requestAnimationFrame(updateCanvas);
}

//Reset the visuals in the canvas
function mouseOut() {
	mousePos = {x:0,y:0};
}

function initCircles() {
	//Spell out my name, ugly but how else to do it? Use relative positioning to make it easier
	
	//C
	var relPos = {x:w/2-240, y:140}
	var setCol = '#FF0000'

	addCircle(30,-40,8,setCol,0.6,relPos);
	addCircle(10,-40,8,setCol,0.6,relPos);
	addCircle(-9,-35,8,setCol,0.6,relPos);
	addCircle(-25,-20,8,setCol,0.6,relPos);
	addCircle(-30,0,8,setCol,0.6,relPos);
	addCircle(-25,20,8,setCol,0.6,relPos);
	addCircle(30,40,8,setCol,0.6,relPos);
	addCircle(10,40,8,setCol,0.6,relPos);
	addCircle(-9,35,8,setCol,0.6,relPos);
	
	
	
	//R
	var relPos = {x:w/2-120, y:140}
	var setCol = '#FF0000'

	addCircle(-30,0,8,setCol,0.6,relPos);
	addCircle(-30,-40,8,setCol,0.6,relPos);
	addCircle(-30,-20,8,setCol,0.6,relPos);
	addCircle(-30,20,8,setCol,0.6,relPos);
	addCircle(-30,40,8,setCol,0.6,relPos);
	
	addCircle(-10,-40,8,setCol,0.6,relPos);
	addCircle(10,-30,8,setCol,0.6,relPos);
	addCircle(10,-10,8,setCol,0.6,relPos);
	addCircle(-10,0,8,setCol,0.6,relPos);
	
	addCircle(10,20,8,setCol,0.6,relPos);
	addCircle(30,40,8,setCol,0.6,relPos);
	
	
	//E
	var relPos = {x:w/2, y:140}

	addCircle(-30,0,8,setCol,0.6,relPos);
	addCircle(-30,-40,8,setCol,0.6,relPos);
	addCircle(-30,-20,8,setCol,0.6,relPos);
	addCircle(-30,20,8,setCol,0.6,relPos);
	addCircle(-30,40,8,setCol,0.6,relPos);
	addCircle(-10,-40,8,setCol,0.6,relPos);
	addCircle(10,-40,8,setCol,0.6,relPos);
	addCircle(30,-40,8,setCol,0.6,relPos);
	addCircle(-10,-0,8,setCol,0.6,relPos);
	addCircle(10,-0,8,setCol,0.6,relPos);
	addCircle(-10,40,8,setCol,0.6,relPos);
	addCircle(10,40,8,setCol,0.6,relPos);
	addCircle(30,40,8,setCol,0.6,relPos);
	
	//E
	var relPos = {x:w/2+120, y:140}

	addCircle(-30,0,8,setCol,0.6,relPos);
	addCircle(-30,-40,8,setCol,0.6,relPos);
	addCircle(-30,-20,8,setCol,0.6,relPos);
	addCircle(-30,20,8,setCol,0.6,relPos);
	addCircle(-30,40,8,setCol,0.6,relPos);
	addCircle(-10,-40,8,setCol,0.6,relPos);
	addCircle(10,-40,8,setCol,0.6,relPos);
	addCircle(30,-40,8,setCol,0.6,relPos);
	addCircle(-10,-0,8,setCol,0.6,relPos);
	addCircle(10,-0,8,setCol,0.6,relPos);
	addCircle(-10,40,8,setCol,0.6,relPos);
	addCircle(10,40,8,setCol,0.6,relPos);
	addCircle(30,40,8,setCol,0.6,relPos);
	
	//D
	var relPos = {x:w/2+240, y:140}

	addCircle(-30,0,8,setCol,0.6,relPos);
	addCircle(-30,-40,8,setCol,0.6,relPos);
	addCircle(-30,-20,8,setCol,0.6,relPos);
	addCircle(-30,20,8,setCol,0.6,relPos);
	addCircle(-30,40,8,setCol,0.6,relPos);
	
	addCircle(-10,-40,8,setCol,0.6,relPos);
	addCircle(10,-35,8,setCol,0.6,relPos);
	addCircle(25,-20,8,setCol,0.6,relPos);
	addCircle(30,0,8,setCol,0.6,relPos);
	
	addCircle(-10,40,8,setCol,0.6,relPos);
	addCircle(10,35,8,setCol,0.6,relPos);
	addCircle(25,20,8,setCol,0.6,relPos);
	
	
	
	
	//G
	var relPos = {x:w/2-360, y:320}

	addCircle(21,-30,6,setCol,0.6,relPos);
	addCircle(4,-30,6,setCol,0.6,relPos);
	addCircle(-9,-20,6,setCol,0.6,relPos);
	addCircle(-18,8,6,setCol,0.6,relPos);
	addCircle(-18,-7,6,setCol,0.6,relPos);
	addCircle(21,30,6,setCol,0.6,relPos);
	addCircle(4,30,6,setCol,0.6,relPos);
	addCircle(-9,20,6,setCol,0.6,relPos);
	
	addCircle(21,15,6,setCol,0.6,relPos);
	addCircle(21,0,6,setCol,0.6,relPos);
	addCircle(7,0,6,setCol,0.6,relPos);
	
	//A
	var relPos = {x:w/2-270, y:320}

	addCircle(-15,0,6,setCol,0.6,relPos);
	addCircle(-15,-15,6,setCol,0.6,relPos);
	addCircle(-15,15,6,setCol,0.6,relPos);
	addCircle(-15,30,6,setCol,0.6,relPos);
	
	addCircle(15,0,6,setCol,0.6,relPos);
	addCircle(15,-15,6,setCol,0.6,relPos);
	addCircle(15,15,6,setCol,0.6,relPos);
	addCircle(15,30,6,setCol,0.6,relPos);
	
	addCircle(8,-30,6,setCol,0.6,relPos);
	addCircle(-7,-30,6,setCol,0.6,relPos);
	addCircle(0,0,6,setCol,0.6,relPos);
	
	
	//L
	var relPos = {x:w/2-180, y:320}

	addCircle(-15,0,6,setCol,0.6,relPos);
	addCircle(-15,-30,6,setCol,0.6,relPos);
	addCircle(-15,-15,6,setCol,0.6,relPos);
	addCircle(-15,15,6,setCol,0.6,relPos);
	addCircle(-15,30,6,setCol,0.6,relPos);
	
	addCircle(0,30,6,setCol,0.6,relPos);
	addCircle(15,30,6,setCol,0.6,relPos);
	
	//L
	var relPos = {x:w/2-90, y:320}

	addCircle(-15,0,6,setCol,0.6,relPos);
	addCircle(-15,-30,6,setCol,0.6,relPos);
	addCircle(-15,-15,6,setCol,0.6,relPos);
	addCircle(-15,15,6,setCol,0.6,relPos);
	addCircle(-15,30,6,setCol,0.6,relPos);
	
	addCircle(0,30,6,setCol,0.6,relPos);
	addCircle(15,30,6,setCol,0.6,relPos);
	
	//A
	var relPos = {x:w/2, y:320}

	addCircle(-15,0,6,setCol,0.6,relPos);
	addCircle(-15,-15,6,setCol,0.6,relPos);
	addCircle(-15,15,6,setCol,0.6,relPos);
	addCircle(-15,30,6,setCol,0.6,relPos);
	
	addCircle(15,0,6,setCol,0.6,relPos);
	addCircle(15,-15,6,setCol,0.6,relPos);
	addCircle(15,15,6,setCol,0.6,relPos);
	addCircle(15,30,6,setCol,0.6,relPos);
	
	addCircle(8,-30,6,setCol,0.6,relPos);
	addCircle(-7,-30,6,setCol,0.6,relPos);
	addCircle(0,0,6,setCol,0.6,relPos);
	
	
	//G
	var relPos = {x:w/2+90, y:320}

	addCircle(21,-30,6,setCol,0.6,relPos);
	addCircle(4,-30,6,setCol,0.6,relPos);
	addCircle(-9,-20,6,setCol,0.6,relPos);
	addCircle(-18,8,6,setCol,0.6,relPos);
	addCircle(-18,-7,6,setCol,0.6,relPos);
	addCircle(21,30,6,setCol,0.6,relPos);
	addCircle(4,30,6,setCol,0.6,relPos);
	addCircle(-9,20,6,setCol,0.6,relPos);
	
	addCircle(21,15,6,setCol,0.6,relPos);
	addCircle(21,0,6,setCol,0.6,relPos);
	addCircle(7,0,6,setCol,0.6,relPos);
	
	
	//L
	var relPos = {x:w/2+180, y:320}

	addCircle(-15,0,6,setCol,0.6,relPos);
	addCircle(-15,-30,6,setCol,0.6,relPos);
	addCircle(-15,-15,6,setCol,0.6,relPos);
	addCircle(-15,15,6,setCol,0.6,relPos);
	addCircle(-15,30,6,setCol,0.6,relPos);
	
	addCircle(0,0,6,setCol,0.6,relPos);
	
	addCircle(15,0,6,setCol,0.6,relPos);
	addCircle(15,-30,6,setCol,0.6,relPos);
	addCircle(15,-15,6,setCol,0.6,relPos);
	addCircle(15,15,6,setCol,0.6,relPos);
	addCircle(15,30,6,setCol,0.6,relPos);
	
	
	//E
	var relPos = {x:w/2+270, y:320}

	addCircle(-15,0,6,setCol,0.6,relPos);
	addCircle(-15,-30,6,setCol,0.6,relPos);
	addCircle(-15,-15,6,setCol,0.6,relPos);
	addCircle(-15,15,6,setCol,0.6,relPos);
	addCircle(-15,30,6,setCol,0.6,relPos);
	
	addCircle(0,0,6,setCol,0.6,relPos);
	
	addCircle(0,-30,6,setCol,0.6,relPos);
	addCircle(15,-30,6,setCol,0.6,relPos);
	addCircle(0,30,6,setCol,0.6,relPos);
	addCircle(15,30,6,setCol,0.6,relPos);
	
	
	//R
	var relPos = {x:w/2+360, y:320}

	addCircle(-15,0,6,setCol,0.6,relPos);
	addCircle(-15,-30,6,setCol,0.6,relPos);
	addCircle(-15,-15,6,setCol,0.6,relPos);
	addCircle(-15,15,6,setCol,0.6,relPos);
	addCircle(-15,30,6,setCol,0.6,relPos);
	
	addCircle(0,-30,6,setCol,0.6,relPos);
	addCircle(15,-24,6,setCol,0.6,relPos);
	addCircle(15,-8,6,setCol,0.6,relPos);
	addCircle(0,0,6,setCol,0.6,relPos);
	
	addCircle(13,15,6,setCol,0.6,relPos);
	addCircle(29,30,6,setCol,0.6,relPos);
	

	
	
	
}
	

function addCircle(aX,aY,r,c,a,relPos) {
	
	//Add some variation
	
	c = '#D50909';
	a = 0.7;

	
	
	//anchor x pos, anchor y pos, radius, color, alpha, actual x pos, actual y pos, x velocity, y velocity
	circles.push({	anchorX:relPos.x+aX, 
					anchorY:relPos.y+aY, 
					rad:r, 
					col:c, 
					alpha:a, 
					x:relPos.x+aX+Math.random()*200-100, 
					y:relPos.y+aY+Math.random()*200-100, 
					xv:Math.random()*10-5, 
					yv:Math.random()*10-5});
	
}


function updateCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	//assuming we are in the circles display
	
	manageCircles();

	
	window.requestAnimationFrame(updateCanvas);
}

function manageCircles() {
	updateCircles();
	drawCircles();
}

function pythag(x,y) {
	return Math.sqrt(x*x+y*y);
}

function updateCircles() {
	for (var i = 0; i < circles.length; i++) {
		var c = circles[i];
		
		//mouse pushing away
		var mouseDist = pythag(c.x-mousePos.x,c.y-mousePos.y);
		var mouseAngle = Math.atan2(c.y-mousePos.y, c.x-mousePos.x);
		
		if (c.rad >= 8) {
			if (mouseDist < 200) {
				c.xv += Math.cos(mouseAngle)*(2-mouseDist/100);
				c.yv += Math.sin(mouseAngle)*(2-mouseDist/100);
			} 	
		} else {
			if (mouseDist < 150) {
				c.xv += Math.cos(mouseAngle)*(2-mouseDist/75);
				c.yv += Math.sin(mouseAngle)*(2-mouseDist/75);
			}
		} 
		
		
		
			//trying to get back to anchor point
			var anchorDist = pythag(c.x-c.anchorX, c.y-c.anchorY);
			var anchorAngle = Math.atan2(c.y-c.anchorY, c.x-c.anchorX);
			
			
			c.xv -= Math.cos(anchorAngle)*anchorDist/100;
			c.yv -= Math.sin(anchorAngle)*anchorDist/100;
		
		
		c.x += c.xv;
		c.y += c.yv;
		
		//friction
		c.xv = c.xv * 0.95;
		c.yv = c.yv * 0.95;
		
	}
}
	
//Draw the new frame using the circles array
function drawCircles() {
	for (var i = 0; i < circles.length; i++) {
		var c = circles[i];
		ctx.beginPath();
		ctx.arc(c.x,c.y,c.rad,0,2*Math.PI);
		ctx.fillStyle = c.col;
		ctx.save();
		ctx.globalAlpha = c.alpha;
		ctx.fill();
		ctx.restore()

	}
}


function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

