var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

setInterval(draw, 10);

var x = canvas.width/2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.width)
    drawBall();
    
    if(y + dy < 0){
        dy = -dy;
    }
    if(y + dy > canvas.height){
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}


