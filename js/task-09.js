function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnToChangeColor = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');

btnToChangeColor.addEventListener('click', ChangeColor);
function ChangeColor(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.innerHTML = getRandomHexColor();
}
