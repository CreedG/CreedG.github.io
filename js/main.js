//Muddy up the namespace with some globals...  since this site is a single page with only one author it can slide
var circles = []
var canvas;
var ctx;
var w;
var h;
var mousePos = {x:999,y:999};
var scale;
var window_w;
var canvas_w;
var canvas_h;
var mobile = false;
var size_num = -1;

//Various considerations to make the site more responsive
function htmlChange() {
	
	var overall_height = document.getElementById('center_bg').clientHeight;
	
	if (size_num != 0 && overall_height >= 2000) {
        size_num = 0;
		document.getElementById("bottom_text").innerHTML = "creedgallagher@gmail.com";
		
		var myElement = document.querySelector("#canvas").style.top = "-500px";
		var myElement = document.querySelector("#center_bg").style.top = "40px";
		var myElement = document.querySelector("#bottom_div").style.top = "40px";
		
			
	} else if (size_num != 1 && overall_height < 2000) {
        size_num = 1;
		document.getElementById("bottom_text").innerHTML = "Made by Creed Gallagher \
															<span style=\"display:inline-block; width: 30px\"></span> \
															v1.03 February 22, 2017 \
															<span style=\"display:inline-block; width: 30px\"></span> \
															creedgallagher@gmail.com"
		var myElement = document.querySelector("#canvas").style.top = "0px";
		var myElement = document.querySelector("#center_bg").style.top = "410px";
		var myElement = document.querySelector("#bottom_div").style.top = "410px";
    }
	
	
	console.log("height: "+document.getElementById('center_bg').clientHeight);
}
htmlChange();

//Make the top canvas responsive

function resizeCanvas() {
	
	canvas = document.getElementById('canvas');
	window_w = $(window).width();
	
	canvas_w = window_w-2;
	if (canvas_w < 480) {
		canvas_w = 480;
	}
	canvas_h = 465;
	
    canvas.width = canvas_w;
    canvas.height = canvas_h;

	if (canvas_w > 1000) {
		scale = 1;
	} else if (canvas_w > 480) {
		scale = canvas_w/1000;
	} else {
		scale = 480/1000;
	} 
}

//Mobile touch support
function registerInput() { 
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    registerDesktop();
	
	console.log('mobile? '+mobile);
}
 
function registerMobile() {
	canvas.addEventListener("touchstart", function (e) {
			mousePos = getTouchPos(canvas, e);
	  var touch = e.touches[0];
	  var mouseEvent = new MouseEvent("mousedown", {
		clientX: touch.clientX,
		clientY: touch.clientY
	  });
	  canvas.dispatchEvent(mouseEvent);
	}, false);
	canvas.addEventListener("touchend", function (e) {
	  var mouseEvent = new MouseEvent("mouseup", {});
	  canvas.dispatchEvent(mouseEvent);
	}, false);
	canvas.addEventListener("touchmove", function (e) {
	  var touch = e.touches[0];
	  var mouseEvent = new MouseEvent("mousemove", {
		clientX: touch.clientX,
		clientY: touch.clientY
	  });
	  canvas.dispatchEvent(mouseEvent);
	  mousePos.x = mouseEvent.x;
	  mousePos.y = mouseEvent.y;
	}, false);

	document.body.addEventListener("touchstart", function (e) {
	  if (e.target == canvas) {
		e.preventDefault();
	  }
	}, false);
	document.body.addEventListener("touchend", function (e) {
	  if (e.target == canvas) {
		e.preventDefault();
	  }
	}, false);
	document.body.addEventListener("touchmove", function (e) {
	  if (e.target == canvas) {
		e.preventDefault();
	  }
	}, false);
	
}

function registerDesktop() {
	canvas.addEventListener('mousemove', function(evt) {
    mousePos = getMousePos(canvas, evt);
    //console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
	}, false);
	
	
	canvas.addEventListener ("mouseout", mouseOut, false);
}

window.onresize = function() {
	resizeCanvas();
	htmlChange();
}

window.onload = function() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");
	
	resizeCanvas();
	
	
	registerInput();
	
	initCircles();
	updateCanvas();
	
	window.requestAnimationFrame(updateCanvas);
	
}


//Reset the visuals in the canvas
function mouseOut() {
	mousePos = {x:canvas_w,y:canvas_h};
}



function initCircles() {
	//Spell out my name. Use relative positioning to make it easier.
	
	//C
	var relPos = {x:-240, y:-90}
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
	var relPos = {x:-120, y:-90}
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
	var relPos = {x:0, y:-90}

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
	var relPos = {x:+120, y:-90}

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
	var relPos = {x:+240, y:-90}

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
	var relPos = {x:-360, y:90}

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
	var relPos = {x:-270, y:90}

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
	var relPos = {x:-180, y:90}

	addCircle(-15,0,6,setCol,0.6,relPos);
	addCircle(-15,-30,6,setCol,0.6,relPos);
	addCircle(-15,-15,6,setCol,0.6,relPos);
	addCircle(-15,15,6,setCol,0.6,relPos);
	addCircle(-15,30,6,setCol,0.6,relPos);
	
	addCircle(0,30,6,setCol,0.6,relPos);
	addCircle(15,30,6,setCol,0.6,relPos);
	
	//L
	var relPos = {x:-90, y:90}

	addCircle(-15,0,6,setCol,0.6,relPos);
	addCircle(-15,-30,6,setCol,0.6,relPos);
	addCircle(-15,-15,6,setCol,0.6,relPos);
	addCircle(-15,15,6,setCol,0.6,relPos);
	addCircle(-15,30,6,setCol,0.6,relPos);
	
	addCircle(0,30,6,setCol,0.6,relPos);
	addCircle(15,30,6,setCol,0.6,relPos);
	
	//A
	var relPos = {x:0, y:90}

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
	var relPos = {x:+90, y:90}

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
	var relPos = {x:+180, y:90}

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
	var relPos = {x:+270, y:90}

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
	var relPos = {x:+360, y:90}

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
	
//Draw the new frame using the circles array. Depends on the scale (which depends on the canvas width, i.e window width)
function drawCircles() {
	for (var i = 0; i < circles.length; i++) {
		var c = circles[i];
		ctx.beginPath();
		ctx.arc(canvas_w/2+c.x*scale,canvas_h/2+c.y*scale,c.rad*scale,0,2*Math.PI);
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
		x: ((evt.clientX - rect.left)-canvas_w/2)/scale,
		y: ((evt.clientY - rect.top)-canvas_h/2)/scale
	};
}







// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: ((touchEvent.touches[0].clientX - rect.left)-canvas_w/2)/scale,
    y: ((touchEvent.touches[0].clientY - rect.top)-canvas_h/2)/scale
  };
}
