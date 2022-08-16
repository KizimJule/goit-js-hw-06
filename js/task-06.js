const inputText = document.querySelector(`#validation-input`);

inputText.addEventListener(`blur`, checkTextInput);

function checkTextInput(event) {
  // console.log(typeof event.currentTarget.value.length);
  if (event.currentTarget.value.length === Number(inputText.getAttribute(`data-length`))) {
    inputText.classList.add(`valid`);
    inputText.classList.remove(`invalid`);
    // if (inputText.classList.contains(`invalid`)) {
    //   inputText.classList.remove(`invalid`);
    // }
  } else inputText.classList.add(`invalid`);
}
// console.log(typeof inputText.getAttribute(`data-length`));
