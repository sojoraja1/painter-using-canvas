//creating canvas
var canvas = document.getElementById("paper");

//creating context for canvas
var context = canvas.getContext("2d");

//to check whether mouse is pressed for draw or not
let startDraw = false;

//default pen color
let penColor = "black";

//default size for pen
let brushSize = 5;