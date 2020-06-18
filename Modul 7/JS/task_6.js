const inputRef = document.querySelector('#validation-input');
let inputLength = document.getElementById('validation-input').value.length;

inputRef.addEventListener('blur', changeInput);
function changeInput(event) {
  if ((inputLength = 6)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
    // inputRef.classList.add('valid');
  }
}
