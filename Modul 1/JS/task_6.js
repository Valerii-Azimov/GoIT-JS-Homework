let input;
let total = 0;

do {
  input = prompt('Введите число');

  if (input === null) {
    input = alert(`Общая сумма чисел равна ${total}`);
    break;
  }
  input = Number(input);

  const notANamber = Number.isNaN(input);
  if (notANamber) {
    input = alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }
  total += input;
} while (true);
