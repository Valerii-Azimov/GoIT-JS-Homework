let input;
const numbers = [];
let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input >= 1) {
    input = Number(input);
    numbers.push(input);
    console.log(numbers);
  }
  if (input === null) {
    break;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
      console.log(total);
    }
  }
  //   for (number of numbers) {
  //     total += number;
  //   }
  //   console.log(total);
  //   break;
  // }
}

// while (input !== null) {
//   input = prompt('Введите число');
//   // input = Number(input);
//   numbers.push(input);
// }
// console.log(numbers);
