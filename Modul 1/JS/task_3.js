let message;

let ADMIN_PASSWORD;
do {
  ADMIN_PASSWORD = prompt('Введите пароль');
  if (ADMIN_PASSWORD === null) {
    message = 'Отменено пользователем!';
    ADMIN_PASSWORD = alert(message);
  } else if (ADMIN_PASSWORD === 'jqueryismyjam') {
    message = 'Добро пожаловать!';
    ADMIN_PASSWORD = alert(message);
    break;
  } else {
    message = 'Доступ запрещен, неверный пароль!';
    ADMIN_PASSWORD = alert(message);
  }
} while (ADMIN_PASSWORD !== 'jqueryismyjam');
