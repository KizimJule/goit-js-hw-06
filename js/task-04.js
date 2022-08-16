const BtnDecrementRef = document.querySelector(`[data-action="decrement"]`);
const BtnIncrementRef = document.querySelector(`[data-action="increment"]`);
const valueRef = document.querySelector(`#value`);

// // console.log(BtnDecrementRef);
// // console.log(BtnIncrementRef);
// // console.log(valueRef);

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
