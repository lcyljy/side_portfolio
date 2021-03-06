console.log(document.querySelectorAll(".sideNav ul li button"))

const colorBtn = document.querySelectorAll(".sideNav ul li button")

const partBtn = document.getElementById("partBtn");
const restBtn = document.getElementById("restBtn");

if (localStorage.getItem("Part") && localStorage.getItem("Rest")) {
  partBtn.style.backgroundColor = getItemPart.color;
  restBtn.style.backgroundColor = getItemRest.color;
}

let check = ctx;
// ctx restCircleCtx main.js로부터 가져옴
partBtn.addEventListener("click", function () {
  // rest/part focus 변경
  if (focusItem.querySelector(".hidden").textContent == "Part") {
    focusItem.firstElementChild.classList.remove("hidden");
    focusItem.lastElementChild.classList.add("hidden")
  }
  min.value = Math.floor(getItemPart.min / 60);
  sec.value = getItemPart.min % 60;
  check = ctx;
  //clock.js의 itmeset 분,초 표기의 색상 변경
  document.querySelectorAll('.timeSet')[0].style.backgroundColor = getItemPart.color;
  document.querySelectorAll('.timeSet')[1].style.backgroundColor = getItemPart.color;

  // console.log(partBtn)
  // console.log(check)
  focusItem.firstElementChild.style.backgroundColor = getItemPart.color;
  padStartNumber();
})

restBtn.addEventListener("click", function () {
  // rest/part focus 변경
  if (focusItem.querySelector(".hidden").textContent == "Rest") {
    focusItem.firstElementChild.classList.add("hidden");
    focusItem.lastElementChild.classList.remove("hidden")
  }
  min.value = Math.floor(getItemRest.min / 60);
  sec.value = getItemRest.min % 60;
  check = restCircleCtx;
  document.querySelectorAll('.timeSet')[0].style.backgroundColor = getItemRest.color;
  document.querySelectorAll('.timeSet')[1].style.backgroundColor = getItemRest.color;
  console.log(restBtn);
  console.log(check);

  focusItem.lastElementChild.style.backgroundColor = getItemRest.color;
  padStartNumber();
})


let colorDocs = [
  "#F7BD1F",
  "#D9C9E8",
  "#B3D7D2",
  "#EBC5CF",
  "#A2BCD2",
  "#CDC0BC",
  "#D2174C",
  "#FF7396",
  "#F4E06D",
  "#FFFFDE",
  "#C499BA"
]
for (let i = 0; i < colorDocs.length; i++) {
  console.log(colorDocs[i])
}
// 해당 색 textcontent가 배경색에 들어가도록.
for (let i = 0; i < colorDocs.length; i++) {
  colorBtn[i].style.backgroundColor = colorDocs[i]
  colorBtn[i].addEventListener("click",
    // (event) => {
    //   console.log(event.target.style.backgroundColor)
    // },
    (event) => (

      check.fillStyle = event.target.style.backgroundColor,
      check.strokeStyle = event.target.style.backgroundColor,
      (check == ctx)
        ? (
          getItemPart.color = event.target.style.backgroundColor,
          localStorage.setItem("Part", JSON.stringify(getItemPart)),
          document.querySelectorAll('.timeSet')[0].style.backgroundColor = getItemPart.color,
          document.querySelectorAll('.timeSet')[1].style.backgroundColor = getItemPart.color,
          partBtn.style.backgroundColor = getItemPart.color,
          focusItem.firstElementChild.style.backgroundColor = partBtn.style.backgroundColor,
          partTimerMin.style.backgroundColor = getItemPart.color,
          partTimerSec.style.backgroundColor = getItemPart.color)
        : (
          getItemRest.color = event.target.style.backgroundColor,
          localStorage.setItem("Rest", JSON.stringify(getItemRest)),
          document.querySelectorAll('.timeSet')[0].style.backgroundColor = getItemRest.color,
          document.querySelectorAll('.timeSet')[1].style.backgroundColor = getItemRest.color,
          restBtn.style.backgroundColor = getItemRest.color,
          focusItem.lastElementChild.style.backgroundColor = restBtn.style.backgroundColor,
          restTimerMin.style.backgroundColor = getItemRest.color,
          restTimerSec.style.backgroundColor = getItemRest.color)
    )
  )
}

// btn을 클릭하면 색이 바뀌도록 변경.


// localStorage를 사용하여 일시정지 버튼 구현

const startBtn = document.querySelector('.pauseBtn > #startBtn')
console.log(startBtn);

const pauseRealBtn = document.querySelector('.pauseBtn > #pauseRealBtn')
const stopBtn = document.querySelector('.pauseBtn > #stopBtn')

// 시작 버튼 조작
const startBtnContent = function () {
  console.log("startBtn clicked")
  console.log(setStopA)
  console.log(setStopB)
  console.log(zero, partNumber, restZero, restPartNumber)

  // 원래는. rest에서 정지 버튼을 누르면 rest부터 다시시작, part에서 정지버튼 누르면 part부터 다시 시작하도록 동작하게끔 하려고 했는데...ㄹ
  // if (setStopB == true && setStopA == true && restZero !== restPartNumber) {
  //   partNumber = getItemPart.min;
  //   restZero = 0;
  //   setStopB = false;
  // } else if (setStopB == true && setStopA == true && zero !== partNumber) {
  //   restPartNumber = getItemRest.min;
  //   zero = 0;
  //   setStopA = false;

  // } else {
  //   console.log("if문을 통과하지 못함")
  // }
  if (setStopB == true && setStopA == true) {
    zero = 0;
    restZero = getItemRest.min;
    partNumber = getItemPart.min;
    restPartNumber = getItemRest.min;
    setStopA = false;
  }
}
// 일시정지 버튼 조작(localStorage 활용)
const pauseRealBtnContent = function () {
  if (localStorage.getItem("PAUSED") !== "paused") {
    if (zero == partNumber && restZero < restPartNumber) {
      console.log("pauseRealBtn clicked")
      setStopB = true;
    } else {
      setStopA = true;
    }
    console.log("paused!!");
    localStorage.setItem("PAUSED", "paused")
  } else if (localStorage.getItem("PAUSED") == "paused") {
    if (zero == partNumber && restZero < restPartNumber && setStopA == true) {
      setStopB = false;
    } else {
      setStopA = false;
    }
    console.log("paused stop now playing!!");
    localStorage.removeItem("PAUSED")
  }
}

// 정지 버튼 조작
const stopBtnContent = function () {
  console.log(setStopA)
  console.log(setStopB)
  console.log(zero, partNumber, restZero, restPartNumber)
  // timer 조작
  restTimerMin.value = Math.floor(getItemRest.min / 60);
  restTimerSec.value = getItemRest.min % 60;
  partTimerMin.value = Math.floor(getItemPart.min / 60);
  partTimerSec.value = getItemPart.min % 60;

  if (zero == partNumber && restZero < restPartNumber) {
    console.log("stopBtn clicked")
    setStopB = true;

    // canvas 초기화
    restCircleCtx.setTransform(1, 0, 0, 1, 0, 0);
    restCircleCtx.clearRect(0, 0, temp.x * 2, temp.y * 2)
    restCircleCtx.translate(temp.x, temp.y)
    restCircleCtx.rotate(-85 * Math.PI / 180);
    restCircleCtx.translate(-temp.x, -temp.y)
  } else {
    setStopA = true;


    // canvas 초기화
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, temp.x * 2, temp.y * 2)
    ctx.translate(temp.x, temp.y)
    ctx.rotate(-95 * Math.PI / 180);
    ctx.translate(-temp.x, -temp.y)
  }
}

startBtn.addEventListener("click", startBtnContent)
pauseRealBtn.addEventListener("click", pauseRealBtnContent)
stopBtn.addEventListener("click", stopBtnContent)

// 해당 nav바를 눌렀을 때 닫히고. 다시 열리게끔 하고 싶은데...
// console.log(document.querySelector(".sideNav"))
// const sideNav = document.querySelector(".sideNav");
// console.log(sideNav)
// sideNav.addEventListener("click",
//   function (e) {
//     if (e.target !== e.currentTarget) return;
//     console.log("clicked!!")
//   })