const checkForSpam = function (message) {
  const newMessage = message.toLowerCase();
  const searchWords = ['spam', 'sale'];
  for (let i = 0; i < searchWords.length; i += 1) {
    if ((message = newMessage.includes(searchWords[i]))) {
      return false;
    }
  }
  return true;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
