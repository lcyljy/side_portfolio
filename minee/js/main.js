// let ul = document.querySelector('ul')
// let li = document.createElement("li");


// ul.appendChild(li);


// 기본값 지정
const Part = {
  color: "#F7BD1F",
  min: 60
}
const Rest = {
  color: "#D9C9E8",
  min: 60
}
if (!localStorage.getItem("Part") && !localStorage.getItem("Rest")) {
  localStorage.setItem("Part", JSON.stringify(Part))
  localStorage.setItem("Rest", JSON.stringify(Rest))

}
// console.log(min.value)

let getItemPart = JSON.parse(localStorage.getItem("Part"))
let getItemRest = JSON.parse(localStorage.getItem("Rest"))

if (localStorage.getItem("Part") && localStorage.getItem("Rest")) {
  min.value = Math.floor(getItemPart.min / 60);
  sec.value = getItemPart.min % 60;

  padStartNumber();
}

focusItem.firstElementChild.style.backgroundColor = getItemPart.color;
focusItem.lastElementChild.style.backgroundColor = getItemRest.color;
document.querySelectorAll('.timeSet')[0].style.backgroundColor = getItemPart.color;
document.querySelectorAll('.timeSet')[1].style.backgroundColor = getItemPart.color;
// getItemPart.color = "#B3D7D2"
// localStorage.setItem("Part", JSON.stringify(getItemPart))
// console.log(getItemPart)
// console.log(Part)
// console.log(localStorage.getItem("Part"))

const canvas = document.getElementById("canvas")
// console.log(canvas)
const ctx = canvas.getContext("2d");
// console.log(ctx)



let temp = {
  x: 150,
  y: 150,
  radius: 80,
  startAngle: 0,
  endAngle: Math.PI * 2,
  anticlockwise: false
}

// 로컬스토리지 동기화
if (!localStorage.getItem("Part") && !localStorage.getItem("Rest")) {
  ctx.fillStyle = "#F7BD1F"
  ctx.strokeStyle = "#F7BD1F"
} else {
  ctx.fillStyle = getItemPart.color;
  ctx.strokeStyle = getItemPart.color;
}

// arc(x, y, radius, startAngle, endAngle, anticlockwise)

let eachDeg = 360 / getItemPart.min;

function degToRad(deg) {
  return (Math.PI / 180) * deg;
}
ctx.translate(temp.x, temp.y)
ctx.rotate(-95 * Math.PI / 180);
ctx.translate(-temp.x, -temp.y)

// 각도 동기화가 계속 잘 안되서 setInterval을 이용해서 원을 그리는 매 초마다(100밀리초) 값을 재전달함.
setInterval(function () {
  eachDeg = 360 / getItemPart.min;
  restEachDeg = 360 / getItemRest.min;
}, 100)

let zero = 0;
let restZero = getItemRest.min;
function draw(props) {
  ctx.beginPath();
  ctx.lineWidth = 0.3;
  ctx.lineTo(temp.x, temp.y)
  ctx.closePath();
  ctx.arc(temp.x, temp.y, temp.radius, degToRad(props * eachDeg), degToRad(props * eachDeg + eachDeg), temp.anticlockwise);
  ctx.fill();
  ctx.stroke();

  // console.log("draw running")
}

// 각각의 값을 일정한 고정값으로 설정해두었을 때는 작동하지만, clock.js의 변경에 따라 값이 변경되면, 제대로 동작하지 않는다. 이유... clock.js에서 partNumber (-> getItemPart.min으로 변경 ver. 1.01)에 대한 값을 조작했고, 이에 따라 eachDeg도 변경되어야하지만. eachDeg에 대한 값은 고정되어있고. 때문에 해당 변수가 변경되지 않는다... 해결법? -> clock.js에서 eachDeg를 재설정.



const restCircle = document.getElementById("restCircle")
const restCircleCtx = restCircle.getContext("2d");


let RestTemp = {
  x: 150,
  y: 150,
  radius: 80,
  startAngle: Math.PI * 2,
  endAngle: 0,
  anticlockwise: true
}
if (!localStorage.getItem("Part") && !localStorage.getItem("Rest")) {
  restCircleCtx.fillStyle = "#D9C9E8"
  restCircleCtx.strokeStyle = "#D9C9E8"
} else {
  restCircleCtx.fillStyle = getItemRest.color;
  restCircleCtx.strokeStyle = getItemRest.color;

}


let restEachDeg = 360 / getItemRest.min;

restCircleCtx.translate(temp.x, temp.y)
restCircleCtx.rotate(-85 * Math.PI / 180);
restCircleCtx.translate(-temp.x, -temp.y)


function restDraw(props) {
  restCircleCtx.beginPath();
  restCircleCtx.lineWidth = 0.3;
  restCircleCtx.lineTo(RestTemp.x, RestTemp.y);
  restCircleCtx.closePath();
  restCircleCtx.arc(RestTemp.x, RestTemp.y, RestTemp.radius, -degToRad(props * restEachDeg), -degToRad(props * restEachDeg + restEachDeg), RestTemp.anticlockwise);
  restCircleCtx.fill();
  restCircleCtx.stroke();
  // console.log("restDraw running")

}

let setStopA = false;
let setStopB = true;

setInterval(function () {
  if (!setStopA) {
    if (restZero == getItemRest.min && zero < getItemPart.min) {
      canvas.classList.add('zIndexUp')
      if (zero == 0) { console.log(zero) }
      zero++
      // console.log(`zero: ${zero}`)
      draw(zero);
    } else if (restZero == getItemRest.min && zero == getItemPart.min) {
      canvas.classList.remove('zIndexUp')
      restZero = 0;
      setStopA = true;
      setStopB = false;
      // canvas 초기화
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, temp.x * 2, temp.y * 2)
      ctx.translate(temp.x, temp.y)
      ctx.rotate(-95 * Math.PI / 180);
      ctx.translate(-temp.x, -temp.y)
    }
  }
}, 100)

setInterval(function () {
  if (!setStopB) {
    if (zero == getItemPart.min && restZero < getItemRest.min) {
      restCircle.classList.add('zIndexUp')
      if (restZero == 0) { console.log(restZero) }
      restZero++
      // console.log(`restZero: ${restZero}`);
      restDraw(restZero);
    } else if (zero == getItemPart.min && restZero == getItemRest.min) {
      restCircle.classList.remove('zIndexUp')
      zero = 0;
      setStopB = true;
      setStopA = false;
      // canvas 초기화
      restCircleCtx.setTransform(1, 0, 0, 1, 0, 0);
      restCircleCtx.clearRect(0, 0, temp.x * 2, temp.y * 2)
      restCircleCtx.translate(temp.x, temp.y)
      restCircleCtx.rotate(-85 * Math.PI / 180);
      restCircleCtx.translate(-temp.x, -temp.y)
    }
  }
}, 100)

// 이제 해야하는거.
// part, rest버튼 눌렀을 때 해당 정보가 로컬스토리지에 저장되도록, 그 때 시간(분,초) 및 색상이 저장되어야함.

// local clear Button
console.log(document.querySelector(".localClear"));
const localClearBtn = document.querySelector(".localClear button");
console.log(localClearBtn)

localClearBtn.addEventListener("click",
  function () {
    stopBtnContent();
    localStorage.clear();
    localStorage.setItem("Part", JSON.stringify(Part))
    localStorage.setItem("Rest", JSON.stringify(Rest))
    getItemPart = JSON.parse(localStorage.getItem("Part"))
    getItemRest = JSON.parse(localStorage.getItem("Rest"))
    location.reload();
  }
)
document.querySelector(".checkPrint").addEventListener("click", function () {
  console.log(
    getItemPart.min,
    getItemPart.color,
    getItemRest.min,
    getItemRest.color
  )


})