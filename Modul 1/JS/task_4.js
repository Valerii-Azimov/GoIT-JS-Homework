let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let totalDroids;
let message;

do {
  totalDroids = prompt('Сколько штук вы желаете заказать?');
  if (totalDroids === null) {
    message = 'Отменено пользователем!';
    break;
  } else if (totalDroids >= 1) {
    totalDroids = Number(totalDroids);
    totalPrice = totalDroids * pricePerDroid;
  } else {
    message = 'Неверный ввод';
    break;
  }
  if (totalPrice <= credits) {
    credits = credits - totalPrice;
    message = `Вы купили ${totalDroids} дроидов, на счету осталось ${credits} кредитов.`;
  } else {
    message = 'Недостаточно средств на счету!';
    console.log(message);
  }
  break;
} while (true);
alert(message);
