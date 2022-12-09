const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  if (!formElements.email.value || !formElements.password.value) {
    return alert('All fields must be filled');
  } else {
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
      email,
      password,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
