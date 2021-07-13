/*
* Author : Sundar Gautam
*/

canvas.addEventListener("mouseup", (e) => {
  startDraw = !startDraw;
});
canvas.addEventListener("mousemove", (e) => draw(e));
