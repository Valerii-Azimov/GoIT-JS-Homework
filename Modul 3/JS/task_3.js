const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  const values = Object.values(employees);
  let bestValue = values[0];

  for (let i = 1; i < values.length; i += 1) {
    if (values[i] > bestValue) {
      bestValue = values[i];
    }
  }
  return keys[values.indexOf(bestValue)];
};

//Альтернативное решение задачи

// const findBestEmployee = employees => {
// const array = Object.entries(employees);
// let max = 0;
// let employer = '';
// for (let index = 0; index < array.length; index++) {
// const key = array[index][0];
// const value = array[index][1];
// if (value > max) {
// max = value;
// employer = key;
// }
// }
// return employer;
// };

// не нужно лишний перебор массива делать с помощью
// return keys[values.indexOf(bestValue)];



/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
