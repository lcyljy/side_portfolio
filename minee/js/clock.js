// timeCheck
const timeBtn = document.querySelector('.timeCheck')
// console.log(timeBtn);
const time = document.querySelectorAll(".time")

const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

// 자릿수 유지 
const padStartNumber = function () {
  min.value = String(min.value).padStart(3, "0");
  sec.value = String(sec.value).padStart(2, "0");
}
// 첫번째 값 세팅.
padStartNumber();
// for (let i = 1; i < time[0].clientHeight; i++) {
//   = document.querySelector(`body > div.timeCheck > div:nth-child(1) > button:nth-child(${i}`)
// }
const sec60Btn = document.querySelector("body > div.clockSystem > div.timeCheck > div:nth-child(1) > button:nth-child(2)")
// console.log(sec60Btn.textContent);
const sec1800Btn = document.querySelector("body > div.clockSystem > div.timeCheck > div:nth-child(1) > button:nth-child(3)")
// console.log(sec1800Btn.textContent)
// const sec3600Btn = document.querySelector("body > div.clockSystem > div.timeCheck > div:nth-child(1) > button:nth-child(4)")
// // console.log(sec3600Btn.textContent)
// const sec7200Btn = document.querySelector("body > div.clockSystem > div.timeCheck > div:nth-child(1) > button:nth-child(5)")
// console.log(sec7200Btn.textContent);
// [a,b,c] = [1,2,3] 비구조화 할당을 이용하면 보다 간략하게 구현 가능할 것 같은데...?

const clearBtn = document.querySelector('.clearBtn');

const clockSynchronization = function () {
  if (check == ctx) {
    getItemPart.min = (+min.value * 60) + +sec.value;
    partNumber = getItemPart.min;
    eachDeg = 360 / partNumber;
    localStorage.setItem("Part", JSON.stringify(getItemPart))
  } else {
    getItemRest.min = (+min.value * 60) + +sec.value;
    restPartNumber = getItemRest.min;
    eachDeg = 360 / restPartNumber;
    localStorage.setItem("Rest", JSON.stringify(getItemRest))
  }
  padStartNumber();
}


sec60Btn.addEventListener("click", function () {
  stopBtnContent();
  min.value++
  clockSynchronization();
})
sec1800Btn.addEventListener("click", function () {
  stopBtnContent();
  min.value = +min.value + +30;
  clockSynchronization();
})
// sec3600Btn.addEventListener("click", function () {
//   stopBtnContent();
//   min.value = +min.value + +60
//   clockSynchronization();
// })
// sec7200Btn.addEventListener("click", function () {
//   stopBtnContent();
//   min.value = +min.value + +120
//   clockSynchronization();
// })

// 너무 하드코딩인데.. 간략하게 못하나.? id이름을 정해서하면...


clearBtn.addEventListener("click", function () {
  stopBtnContent();
  min.value = +0;
  sec.value = +0;
  clockSynchronization();
})

// time
// 분은 세자리수로 표기., 초는 두자리수로 표기

let partNumber = ((+min.value * 60) + +sec.value)// 나중엔 10 곱해야됨
let restPartNumber = ((+min.value * 60) + +sec.value)// 나중엔 10 곱해야됨



min.addEventListener("change", function () {
  stopBtnContent();
  padStartNumber();
  clockSynchronization()
})
sec.addEventListener("change", function () {
  stopBtnContent();
  if (+sec.value == -1) {
    min.value = +min.value - 1;
    sec.value = 59;
  } else if (+sec.value >= 60) {
    min.value = +min.value + Math.floor(+sec.value / 60);
    sec.value = +sec.value % 60;
  }
  padStartNumber();
  clockSynchronization();
})




// focus

console.log(document.getElementById("focusItem"))
const focusItem = document.getElementById("focusItem");
focusItem.addEventListener("click", () => {
  console.log("check")
})
// 오른쪽 nav의 part, rest 버튼을 눌렀을 때 해당 박스의 색이 변하도록 변경, part, rest 중 어느것이 포커싱되어있느냐에따라 나머지 hidden 속성 추가



