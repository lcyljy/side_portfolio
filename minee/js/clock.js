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
const sec3600Btn = document.querySelector("body > div.clockSystem > div.timeCheck > div:nth-child(1) > button:nth-child(4)")
// console.log(sec3600Btn.textContent)
const sec7200Btn = document.querySelector("body > div.clockSystem > div.timeCheck > div:nth-child(1) > button:nth-child(5)")
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
  min.value = +min.value + +30
  clockSynchronization();
})
sec3600Btn.addEventListener("click", function () {
  stopBtnContent();
  min.value = +min.value + +60
  clockSynchronization();
})
sec7200Btn.addEventListener("click", function () {
  stopBtnContent();
  min.value = +min.value + +120
  clockSynchronization();
})

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


// 현재는 next만 변경되도록(즉 part만 변경되도록 해놓았는데.) 이를 수정하여, focus가 어디있느냐에 따라 해당 값이 변하도록 수정하기..

// min
// sec

//part의 값을 1/10으로 나눈 초.
// focus

console.log(document.getElementById("focusItem"))
const focusItem = document.getElementById("focusItem");
focusItem.addEventListener("click", () => {
  console.log("check")
})
// 오른쪽 nav의 part, rest 버튼을 눌렀을 때 해당 박스의 색이 변하도록 변경, part, rest 중 어느것이 포커싱되어있느냐에따라 나머지 hidden 속성 추가



// idea.. 현재는 rest와 part의 값에 대해서 각각 저장이 안되서 서로 충돌이 일어남. rest, part 버튼을 눌렀을 때 check가 변경되지만. 해당 정보가 계속 저장되어있는지 알 수 없고. 해당 정보가 clock.js에서의 값에 변동이 실제로 이루어지고 있는지 추적이 어려움. (A.js에서 실행되었지만 해당 정보가 b.js에서 실행되지는 않음(즉, 매 시간마다 재실행되는 함수가 아니면 혹은 그러한 변화를 추적하는게 아니라면 해당 값의 실제적인 변동이 이루어지지 않게됨.)
// 그러면... 일단. part, rest값에 대해서 각각 키값으로 주고(왜냐하면, part값과 rest값은 각각 하나씩만 가지고 있어야 하니까... 하지만 운동처럼 10/2 10/2 5/2 이런식으로 구성한다면 각각의 값을 저장할 수 있어야하는데....?)
// 일단 그건 나중에 생각하고. 일단. part rest 라는 키값과 value 값으로 시간, 색이 저장되어야겠고, 또 뭐가 저장되어야할까...

// nav버튼 눌렀을 때 해당 색이 btn에 색 반영
// clock에 색 반영
// focus에 색 반영