const input = document.querySelector('#validation-input');

input.addEventListener('blur', onBlur);

function onBlur(evt) {
  if (
    evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length)
  ) {
    if (evt.currentTarget.classList.contains('invalid')) {
      evt.currentTarget.classList.toggle('invalid');
      return evt.currentTarget.classList.add('valid');
    } else {
      return evt.currentTarget.classList.add('valid');
    }
  }
  if (
    evt.currentTarget.value.length !== Number(evt.currentTarget.dataset.length)
  ) {
    if (evt.currentTarget.classList.contains('valid')) {
      evt.currentTarget.classList.toggle('valid');
      return evt.currentTarget.classList.add('invalid');
    } else {
      return evt.currentTarget.classList.add('invalid');
    }
  }
}
