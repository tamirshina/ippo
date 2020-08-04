let myFunc;
export function timer(homeBtnLogic) {
  myFunc = window.setTimeout(() => {
    homeBtnLogic();
  }, 300000);
  console.log("timer on");
}
export function removeTimer() {
  window.clearTimeout(myFunc);
  console.log("timer off");
}
