// // let counterValue = 0;
// const counter = {
//   counterValue: 0,
//   increment() {
//     this.counterValue += 1;
//   },
//   decrement() {
//     this.counterValue -= 1;
//   },
// };
const BtnDecrementRef = document.querySelector(`[data-action="decrement"]`);
const BtnIncrementRef = document.querySelector(`[data-action="increment"]`);
const valueRef = document.querySelector(`#value`);

// // console.log(BtnDecrementRef);
// // console.log(BtnIncrementRef);
// // console.log(valueRef);

// BtnIncrementRef.addEventListener(`click`, () => {
//   counter.increment();
//   valueRef.textContent = counter.counterValue;
// });
// BtnDecrementRef.addEventListener(`click`, () => {
//   counter.decrement();
//   valueRef.textContent = counter.counterValue;
// });

let counterValue = 0;
function increment() {
  counterValue += 1;
  valueRef.innerHTML = counterValue;
}
function decrement() {
  counterValue -= 1;
  valueRef.innerHTML = counterValue;
}

BtnIncrementRef.addEventListener(`click`, increment);
BtnDecrementRef.addEventListener(`click`, decrement);
