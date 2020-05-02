const yourNumber = 'Введите число';
const NotAnuber = 'Было введено не число, попробуйте еще раз';
const numbers = [];
let total = 0;
let input;

while (input !== null) {
  input = prompt(yourNumber, 0);

  if (input === null) {
    break;
  }
  const userNumber = +input;

  if (Number.isNaN(userNumber)) {
    alert(NO_NUMBER);
  } else {
    numbers.push(userNumber);
  }
}
if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  console.log('Общая сумма чисел равна', total);
}
