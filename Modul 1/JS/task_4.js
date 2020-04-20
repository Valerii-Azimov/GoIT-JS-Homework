let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let totalDroids;
let message;

do {
  totalDroids = prompt('Сколько штук вы желаете заказать?');
  if (totalDroids === null) {
    message = 'Отменено пользователем!';
    totalDroids = alert(message);
    break;
  } else if (totalDroids >= 1) {
    totalDroids = Number(totalDroids);
    totalPrice = totalDroids * pricePerDroid;
  } else {
    message = 'Неверный ввод';
    totalDroids = alert(message);
    break;
  }
  if (totalPrice <= credits) {
    credits = credits - totalPrice;
    message = `Вы купили ${totalDroids} дроидов, на счету осталось ${credits} кредитов.`;
    totalDroids = alert(message);
  } else {
    message = 'Недостаточно средств на счету!';
    totalDroids = alert(message);
    console.log(message);
  }
  break;
} while (true);
