'use strict';

const logoElement = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  resolve();
});

logoElement.addEventListener('click', () => {
  promise1.then(successHandler).catch(errorHandler);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.then(successHandler).catch(errorHandler);

function successHandler() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';

  document.body.append(message);
}

function errorHandler() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.classList.add('error-message');
  message.textContent = 'Promise was rejected!';

  document.body.append(message);
}
