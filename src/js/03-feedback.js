const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const button = document.querySelector('button[type=submit]');
const emailInput = document.querySelector(`input[name="email"]`);
const messageInput = document.querySelector(`textarea[name="message"]`);
const LOCALSTORAGE_KEY = 'feedback-form-state';
let user = {};

updateInput();

form.addEventListener('input', throttle(onHandlerInput, 500));
form.addEventListener('submit', onHandlerSubmit);

function onHandlerInput(evt) {
  evt.preventDefault();

  user[evt.target.name] = evt.target.value;

  const userString = JSON.stringify(user);
  console.log(userString);

  localStorage.setItem(LOCALSTORAGE_KEY, `${userString}`);
}

function updateInput() {
  let getItemLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY);

  let parseItemLocalStorage = JSON.parse(getItemLocalStorage);

  emailInput.value = parseItemLocalStorage.email || '';
  messageInput.value = parseItemLocalStorage.message || '';
}

function onHandlerSubmit(evt) {
  evt.preventDefault();

  if (emailInput.value === '' || messageInput.value === '') {
    return alert('Все поля должны быть заполнены');
  }

  console.log(user);

  localStorage.clear();
  form.reset();
}
