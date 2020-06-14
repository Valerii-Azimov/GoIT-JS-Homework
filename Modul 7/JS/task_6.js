const inputRef = document.querySelector('#validation-input');
let inputLength = document.getElementById('validation-input').value.length;

inputRef.addEventListener('blur', changeInput);
function changeInput(event) {
  if ((inputLength = 6)) {
    inputRef.classList.add('valid');
    // inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('invalid');
    // inputRef.classList.add('valid');
  }
}
