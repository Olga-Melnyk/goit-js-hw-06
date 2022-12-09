function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
console.dir(button);

const span = document.querySelector('.color');
console.dir(span);

const body = document.querySelector('body');
console.dir(body);

button.addEventListener('click', onClick);

function onClick(evt) {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}
