// console.log("test")
const mbSetting = document.getElementById("mbSetting")
// console.log(mbClockSystem)
const mbClockSystem = document.querySelector(".clockSystem");
const mbCanvasWrap = document.querySelector(".canvas-wrap");
const mbSideNav = document.querySelector(".sideNav")

mbSetting.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");
  mbClockSystem.classList.toggle("hidden")
  mbSideNav.classList.toggle("hidden")
  mbCanvasWrap.classList.toggle("mbOpacity")
  document.querySelector(".timer").classList.toggle("hidden")
})

// 추후 해당 기능을 분리하는 것이 필요.

// clock, sideNav 버튼을 눌렀을 때 해당 버튼이 나타나야하고, modal느낌으로다가. x나 외부를 눌렀을 때 다시 사라져야함.
// 740px 이하에서만 없애는 버튼 및 외부눌렀을 때 사라지는 옵션이 추가되어야하고.
// 해당 modal은