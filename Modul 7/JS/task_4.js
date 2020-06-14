let counterValue = 0;

let totalValue = document.querySelector('#value');

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const doIncrementOnClick = () => {
  counterValue = counterValue + 1;
  totalValue.textContent = `${counterValue}`;
};

const doDecrementClick = () => {
  counterValue = counterValue - 1;
  totalValue.textContent = `${counterValue}`;
};

incrementBtn.addEventListener('click', doIncrementOnClick);
decrementBtn.addEventListener('click', doDecrementClick);
