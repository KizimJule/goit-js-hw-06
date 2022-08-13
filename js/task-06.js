const inputText = document.querySelector(`#validation-input`);

inputText.addEventListener(`blur`, checkTextInput);

function checkTextInput(event) {
  console.log(event);
}
