let country = prompt('Укажите страну доставки');
let shippingСost;
let message;

if (country === null) {
  message = 'Отменено пользователем!';
} else {
  country = country.toLowerCase();
  switch (country) {
    case 'китай': {
      shippingСost = 100;
      break;
    }
    case 'чили': {
      shippingСost = 250;
      break;
    }
    case 'австралия': {
      shippingСost = 170;
      break;
    }
    case 'индия': {
      shippingСost = 80;
      break;
    }
    case 'ямайка': {
      shippingСost = 120;
      break;
    }
    default:
      alert(`В вашей стране доставка не доступна`);
  }
  message = `Доставка в ${country} будет стоить ${shippingСost} кредитов`;
}
if (Number(shippingСost) >= 0) {
  console.log(shippingСost);
  alert(message);
}
