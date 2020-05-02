const calculateEngravingPrice = function (message, pricePerWord) {
  // const word = message.split(' ');
  // for (let i = 0; i < word.length; i += 1) return word.length * pricePerWord;
  return message.split(' ').length * pricePerWord;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);
