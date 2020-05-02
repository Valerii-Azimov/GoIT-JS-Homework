// const formatString = function (string) {
//   const letters = string.split('');
//   for (let i = 0; i < letters.length; i += 1) {
//     if (letters.length >= 40) {
//       let newLetters = letters.splice(0, 40);
//       newLetters.push('...');
//       return newLetters.join('');
//     }
//     return string;
//   }
// };

const formatString = (string, stringMaxLength = 40) =>
  string.length > stringMaxLength
    ? `${string.slice(0, stringMaxLength - 1)}...`
    : string;

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
