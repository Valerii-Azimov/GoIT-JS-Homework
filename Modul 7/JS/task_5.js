const inputRef = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
inputRef.addEventListener('input', e => {
  nameOutput.textContent = `${e.target.value}`;
});
