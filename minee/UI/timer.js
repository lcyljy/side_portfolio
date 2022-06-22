// console.log(document.querySelector(".timer"))
const timer = document.querySelector(".timer")
// console.log(timer);

const partTimer = document.querySelector(".partTimer");
const restTimer = document.querySelector(".restTimer");

let partTimerMin = partTimer.querySelector(".min");
let partTimerSec = partTimer.querySelector(".sec");

let restTimerMin = restTimer.querySelector(".min");
let restTimerSec = restTimer.querySelector(".sec");


console.log(timer.querySelector(".min").value);
let timerMin = timer.querySelector(".min")
let timerSec = timer.querySelector(".sec")
// console.log(timerMin.value);
// console.log(timerSec.value);

// 초기 자리값 설정
const partTimerPadStart = function () {
  partTimerMin.value = String(partTimerMin.value).padStart(3, "0");
  partTimerSec.value = String(partTimerSec.value).padStart(2, "0");
}

const restTimerPadStart = function () {
  restTimerMin.value = String(restTimerMin.value).padStart(3, "0");
  restTimerSec.value = String(restTimerSec.value).padStart(2, "0");
}
partTimerPadStart();
restTimerPadStart();

min.addEventListener("change", function () {
  if (check == ctx) {
    partTimerMin.value = min.value;
    partTimerSec.value = sec.value;
    partTimerPadStart();
  } else {
    restTimerMin.value = min.value;
    restTimerSec.value = sec.value;
    restTimerPadStart();
  }

})

sec.addEventListener("change", function () {
  if (check == ctx) {
    partTimerMin.value = min.value;
    partTimerSec.value = sec.value;
    partTimerPadStart();
    restTimerPadStart();
  } else {
    restTimerMin.value = min.value;
    restTimerSec.value = sec.value;
  }
})

// 해당 값이 되었을 때 떨어져야함.
setInterval(function () {
  if (!setStopA) {
    if (partTimerMin.value > 0 && partTimerSec.value == 0) {
      partTimerMin.value--;
      partTimerSec.value = 59;
    } else {
      if (partTimerMin.value >= 0 && partTimerSec.value > 0) {
        partTimerSec.value--;
        partTimerPadStart();
      }
      if (restTimerMin.value == 0 && restTimerSec.value == 0) {
        // console.log("zerobase")
        restTimerMin.value = Math.floor(getItemRest.min / 60);
        restTimerSec.value = (getItemRest.min % 60);

        restTimerPadStart();
      };

    }
    // console.log("PartTimer running")
  }
}, 100)

setInterval(function () {
  if (!setStopB) {
    if (restTimerMin.value > 0 && restTimerSec.value == 0) {
      restTimerMin.value--;
      restTimerSec.value = 59;
    } else {
      if (restTimerMin.value >= 0 && restTimerSec.value > 0) {

        restTimerSec.value--;
        restTimerPadStart();
      }
      if (partTimerMin.value == 0 && partTimerSec.value == 0) {
        // console.log("zerobase")
        partTimerMin.value = Math.floor(getItemPart.min / 60);
        partTimerSec.value = (getItemPart.min % 60);
        partTimerPadStart();
      };
    }
    // console.log("RestTimer running")
  }
}, 100)


document.querySelector(".canvas-wrap").addEventListener("click", function () {
  document.querySelector(".canvas-wrap").classList.toggle("hidden");
  document.querySelector(".timer").classList.toggle("hidden");
})

document.querySelector(".timer").addEventListener("click", function () {
  document.querySelector(".canvas-wrap").addEventListener("click", function () {
    document.querySelector(".canvas-wrap").classList.toggle("hidden");
    document.querySelector(".timer").classList.toggle("hidden");
  })
})