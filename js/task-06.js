const inputText = document.querySelector(`#validation-input`);

inputText.addEventListener(`blur`, checkTextInput);

function checkTextInput(event) {
  let textValue = event.currentTarget.value.trim();
  if (textValue.length === Number(inputText.getAttribute(`data-length`))) {
    inputText.classList.add(`valid`);
    inputText.classList.remove(`invalid`);
  } else inputText.classList.add(`invalid`);
}
