const input = document.querySelector('#font-size-control');

const span = document.querySelector('#text');

input.addEventListener('input', onInput);

function onInput(evt) {
  const size = `${evt.currentTarget.value}` / 3.5 + 'px';
  span.style.fontSize = size;
}
