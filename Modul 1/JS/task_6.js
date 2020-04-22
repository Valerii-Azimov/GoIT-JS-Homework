let total = 0;

while (true) {
  let input = prompt('Введите число');
  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  input = Number(input);

  const notANamber = Number.isNaN(input);
  if (notANamber) {
    alert(`Было введено не число, попробуйте еще раз`);
  }
  total += input;
}
