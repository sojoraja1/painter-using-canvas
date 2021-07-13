/*
 * Gives mouse position in our canvs
 * @params {Canvas} canvas   - our canvas element
 * @params {Event} event     - canvas event object
 * @returns {Object}  {x:x-coordinate,y:y-coordinate}
 */

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

/*
 * @params {Event} - event object of target element
 */
function setColor(e) {
  penColor = e.target.value;
}

/*
 * @params {Event} - event object of target element
 */

function setBrushSize(e) {
  brushSize = e.target.value;
}

/*
 * Draws given shapes
 */
function draw(evt) {
  var pos = getMousePos(canvas, evt);
  if (startDraw) {
    context.beginPath();
    context.arc(pos.x, pos.y, brushSize, 0, 2 * Math.PI);
    context.fillStyle = penColor;
    context.fill();
    context.strokeStyle = penColor;
    context.stroke();
  }
}

/* 
 *Clears the canvas for new draw
 
*/
const clearIt = () => {
  context.clearRect(0, 0, 500, 500);
};
