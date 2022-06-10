const backOne = document.getElementById("centerCircle")
// console.log(backOne)
const ctxOne = backOne.getContext("2d");
const backTwo = document.getElementById("backCircle")
const ctxTwo = backTwo.getContext("2d");
// console.log(ctxOne)


let tempA = {
  x: 150,
  y: 150,
  radius: 15,
  startAngle: 0,
  endAngle: Math.PI * 2,
  anticlockwise: false
}


ctxOne.fillStyle = "pink"
ctxOne.strokeStyle = "blue"

function backDraw() {
  ctxOne.beginPath();
  ctxOne.lineWidth = 7;
  ctxOne.arc(tempA.x, tempA.y, tempA.radius, tempA.startAngle, tempA.endAngle, tempA.anticlockwise);
  ctxOne.fill();
  ctxOne.stroke();
}
backDraw();
ctxOne.fillStyle = "pink"
ctxOne.shadowColor = "white"
ctxOne.shadowBlur = 8;
ctxOne.fillRect(tempA.x - (tempA.radius / 2 - 3), tempA.y / 3, (tempA.radius / 2), (temp.radius + tempA.radius))

// temp 는 main.js내에 있는 변수임.

let tempB = {
  x: 150,
  y: 150,
  radius: 105,
  startAngle: 0,
  endAngle: Math.PI * 2,
  anticlockwise: false
}

ctxTwo.fillStyle = "green"
ctxTwo.strokeStyle = "#1f1f1f"


function lineDraw() {
  ctxTwo.beginPath();
  ctxTwo.globalAlpha = 0.1;
  ctxTwo.lineWidth = 2;
  ctxTwo.shadowColor = "black"
  ctxTwo.shadowBlur = 16;
  ctxTwo.arc(tempB.x, tempB.y, tempB.radius, tempB.startAngle, tempB.endAngle, tempB.anticlockwise);
  ctxTwo.fill();
  ctxTwo.stroke();
}
lineDraw();

console.log(document.querySelectorAll("timeSet"))