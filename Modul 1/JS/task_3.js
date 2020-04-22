let message;

let ADMIN_PASSWORD;
do {
  ADMIN_PASSWORD = prompt('Введите пароль');
  if (ADMIN_PASSWORD === null) {
    message = 'Отменено пользователем!';
    break;
  } else if (ADMIN_PASSWORD === 'jqueryismyjam') {
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }
} while (ADMIN_PASSWORD !== 'jqueryismyjam');
alert(message);
