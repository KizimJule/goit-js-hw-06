const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  //При отправке формы страница не должна перезагружаться:
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  const formData = { email: email.value, password: password.value };
  console.log(formData);

  event.currentTarget.reset();
}
