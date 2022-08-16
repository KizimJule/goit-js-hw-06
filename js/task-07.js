const inputFontSizeControl = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);
text.style.fontSize = '16px';
inputFontSizeControl.addEventListener(`input`, fontSizeChange);
function fontSizeChange(event) {
  //   console.dir(event.target.value);
  //   console.dir(text.style);

  text.style.fontSize = `${event.target.value}px`;
}
