const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputListener)
function onInputListener(event) {
    outputEl.textContent = event.currentTarget.value || 'Anonymous';

};

