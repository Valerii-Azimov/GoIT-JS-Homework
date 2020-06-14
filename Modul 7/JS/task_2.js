const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const createProductList = ingredients => {
//   // const ingredientsRef = document.querySelector('#ingredients');

//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredients;
//   return itemRef;
// };

// console.log(createProductList(ingredients));

// ingredients.forEach(ingredient => {
//   const itemRef = document.createElement('li');
//   // console.log(ingredient);
//   itemRef.append(ingredient);
//   console.log(itemRef);
// });

const createProductList = ingredients => {
  const ingredientsRef = document.querySelector('#ingredients');

  ingredients.forEach(ingredient => {
    const itemRef = document.createElement('li');
    // console.log(ingredient);
    itemRef.append(ingredient);
    return ingredientsRef.appendChild(itemRef);
  });
  return ingredientsRef;
};

console.log(createProductList(ingredients));

// const itemRef1 = document.createElement('li');
// itemRef1.textContent = ingredients[0];
// console.log(itemRef1);

// const itemRef2 = document.createElement('li');
// itemRef2.textContent = ingredients[1];
// console.log(itemRef2);

// const itemRef3 = document.createElement('li');
// itemRef3.textContent = ingredients[2];
// console.log(itemRef3);

// const itemRef4 = document.createElement('li');
// itemRef4.textContent = ingredients[3];
// console.log(itemRef4);

// const itemRef5 = document.createElement('li');
// itemRef5.textContent = ingredients[4];
// console.log(itemRef5);

// const itemRef6 = document.createElement('li');
// itemRef6.textContent = ingredients[5];
// console.log(itemRef6);

// const itemListRef = document.querySelector('#ingredients');
// itemListRef.append(itemRef1, itemRef2, itemRef3, itemRef4, itemRef5, itemRef6);
// console.log(itemListRef);
