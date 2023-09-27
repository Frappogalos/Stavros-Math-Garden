const BACKGROUND_COLOR = "#000000";
const LINE_COLOR = "#FFFFFF";
const LINE_WIDTH = 15;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

var canvas;
var context;

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function prepareCanvas() {
  canvas = document.getElementById("my-canvas");
  context = canvas.getContext("2d");
  var isPainting = false;
  var onTarget = false;

  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  context.strokeStyle = LINE_COLOR;
  context.lineWidth = LINE_WIDTH;
  context.lineJoin = "round";

  canvas.addEventListener("mousedown", function (event) {
    isPainting = true;
    currentX = event.clientX - canvas.offsetLeft;
    currentY = event.clientY - canvas.offsetTop;
  });

  canvas.addEventListener('mouseenter', function(event) {
    onTarget = true;
  })

  canvas.addEventListener("touchstart", function (event) {
    isPainting = true;
    currentX = event.touches[0].pageX - canvas.offsetLeft;
    currentY = event.touches[0].pageY - canvas.offsetTop;
  });

  canvas.addEventListener("mouseleave", function (event) {
    isPainting = false;
    onTarget = false;
  });

  canvas.addEventListener("touchcancel", function (event) {
    isPainting = false;
  });

  canvas.addEventListener("mousemove", function (event) {
    if (isPainting && onTarget) {
      previousX = currentX;
      currentX = event.clientX - canvas.offsetLeft;

      previousY = currentY;
      currentY = event.clientY - canvas.offsetTop;

      draw();
    }
  });

  canvas.addEventListener("touchmove", function (event) {
    if (isPainting) {
        previousX = currentX;
        currentX = event.touches[0].pageX - canvas.offsetLeft;
  
        previousY = currentY;
        currentY = event.touches[0].pageY - canvas.offsetTop;
  
        draw();
      }
  });


  canvas.addEventListener("mouseup", function (event) {
    isPainting = false;
  });

  canvas.addEventListener("touchend", function (event) {
    isPainting = false;
  });

}



function clearCanvas() {
    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}
