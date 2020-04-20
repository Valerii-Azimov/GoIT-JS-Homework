let country;
let shippingСost;

do {
  country = prompt('Укажите страну доставки');
  if (country === null) {
    let message = 'Отменено пользователем!';
    country = alert('Отменено пользователем!');
    break;
  } else {
    country = country.toLowerCase();
    switch (country) {
      case 'китай': {
        shippingСost = 100;
        country = alert(
          `Доставка в ${country} будет стоить ${shippingСost} кредитов`,
        );
        break;
      }
      case 'чили': {
        shippingСost = 250;
        country = alert(
          `Доставка в ${country} будет стоить ${shippingСost} кредитов`,
        );
        break;
      }
      case 'австралия': {
        shippingСost = 170;
        country = alert(
          `Доставка в ${country} будет стоить ${shippingСost} кредитов`,
        );
        break;
      }
      case 'индия': {
        shippingСost = 80;
        country = alert(
          `Доставка в ${country} будет стоить ${shippingСost} кредитов`,
        );
        break;
      }
      case 'ямайка': {
        shippingСost = 120;
        country = alert(
          `Доставка в ${country} будет стоить ${shippingСost} кредитов`,
        );
        break;
      }
      default:
        shippingСost = `В вашей стране доставка не доступна`;
        country = alert(shippingСost);
    }
    break;
  }
} while (true);
