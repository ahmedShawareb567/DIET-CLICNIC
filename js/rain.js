/*jslint plusplus: true*/
/*global console, ActiveXObject, requestAnimationFrame*/

var select = function (Element) {
	'use strict';
	return document.querySelector(Element);
},
	canvas = select('canvas'),
	ctx = canvas.getContext('2d'),
	color = [
		'#DD105E',
		'#46466E',
		'#8787A3',
		'#BDBDD7',
		'#FEFF9A',
		'#6FE8C8',
		'#85FEDE',
		'#B7ABFB',
		'#3B0944',
		'#D96459'
	],
	number = 200,
	gradient,
	rain,
	bubbles,
	mouse = {
	x: undefined,
	y: undefined
    },
	cw = canvas.width = window.innerWidth,
	ch = canvas.height = window.innerHeight,
	g,
	i;
canvas.style.backgroundColor = 'transparent';
window.addEventListener('resize', function () {
	'use strict';
	cw = canvas.width = window.innerWidth;
	ch = canvas.height = window.innerHeight;
}, false);

var bubble = function(x, y, h, vx, vy) {
	'use strict';
	this.x = x;
	this.y = y;
	this.h = h;
	this.vx = vx;
	this.vy = vy;
	this.draw = function() {
		'use strict';
		ctx.beginPath();
		ctx.strokeStyle = 'rgba(255,255,255,.6)';
		ctx.moveTo(this.x, this.y);
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
    	ctx.lineWidth = 2;
		ctx.globalAlpha = .9;
		ctx.lineTo(this.x, (this.y + this.h * 2));
		ctx.stroke();
	};
	this.update = function() {
		'use strict';
		if (this.y > ch || this.x > cw) {
			this.x = Math.random() * cw;
			this.y = Math.random();
			this.h = Math.random() * 5;
			this.vy = Math.random() * 2;
		}
		if (this.y < ch) {
			this.y += this.vy * 9;
		} else {
			this.y += this.vy;
		}
		this.draw();
	};
};

 bubbles = [];

function generateBubbles() {
	'use strict';
	for (g = 0; g < number; g++) {
		var x = Math.random() * cw,
		    y = Math.random() * ch,
			h = Math.random() * 5,
		    vx = 0,
		    vy = Math.random() * 2;
		bubbles.push(new bubble(x, y, h, vx, vy));
	}
}
generateBubbles();
function animateBubbles() {
	'use strict';
	ctx.clearRect(0, 0, cw, ch);
	for (i = 0; i < bubbles.length; i++) {
		bubbles[i].update();
	}
	requestAnimationFrame(animateBubbles);
}
animateBubbles();
canvas.addEventListener('click', function(e) {
	mouse.x = e.x;
	mouse.y = e.y;
}, false);