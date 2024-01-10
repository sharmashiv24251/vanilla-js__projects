// document.addEventListener("DOMContentLoaded", function () {
//   const canvas = document.getElementById("drawingBoard");
//   const ctx = canvas.getContext("2d");
//   let isDrawing = false;

//   canvas.width = 800;
//   canvas.height = 800;

//   canvas.addEventListener("mousedown", startDrawing);
//   canvas.addEventListener("mouseup", stopDrawing);
//   canvas.addEventListener("mouseout", stopDrawing);
//   canvas.addEventListener("mousemove", draw);

//   function clearCanvas() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//   }

//   document.getElementById("clear").addEventListener("click", clearCanvas);
//   document
//     .getElementById("stroke")
//     .addEventListener("input", changeStrokeColor);

//   function startDrawing(e) {
//     isDrawing = true;
//     draw(e);
//   }

//   function stopDrawing() {
//     isDrawing = false;
//     ctx.beginPath();
//   }

//   function draw(e) {
//     if (!isDrawing) return;

//     const rect = canvas.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     ctx.lineWidth = 5;
//     ctx.lineCap = "round";
//     ctx.strokeStyle = document.getElementById("stroke").value;

//     ctx.lineTo(mouseX, mouseY);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(mouseX, mouseY);
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("drawingBoard");
  const ctx = canvas.getContext("2d");
  let isDrawing = false;

  canvas.width = 800;
  canvas.height = 800;

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);
  canvas.addEventListener("mousemove", draw);

  // Touch events
  canvas.addEventListener("touchstart", handleTouchStart);
  canvas.addEventListener("touchend", stopDrawing);
  canvas.addEventListener("touchcancel", stopDrawing);
  canvas.addEventListener("touchmove", handleTouchMove);

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
  }

  document.getElementById("clear").addEventListener("click", clearCanvas);
  document
    .getElementById("stroke")
    .addEventListener("input", changeStrokeColor);

  function startDrawing(e) {
    isDrawing = true;
    draw(e);
  }

  function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    drawLine(mouseX, mouseY);
  }

  function handleTouchStart(e) {
    e.preventDefault();
    isDrawing = true;

    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;

    drawLine(touchX, touchY);
  }

  function handleTouchMove(e) {
    e.preventDefault();

    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;

    drawLine(touchX, touchY);
  }

  function drawLine(x, y) {
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = document.getElementById("stroke").value;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
});
