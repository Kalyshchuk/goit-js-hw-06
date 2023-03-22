const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
e.preventDefault(); // зупиняємо перезавантаження сторінки

const emailInput = form.elements.email;
const passwordInput = form.elements.password;

if (emailInput.value === '' || passwordInput.value === '') {
alert('All fields must be filled in');
return;
}

const formData = {
email: emailInput.value,
password: passwordInput.value
};

console.log(formData);

form.reset();
});
