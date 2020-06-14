const totalItems = document.querySelectorAll('.item');
console.log(`В списке ${totalItems.length} категории`);
// const titlesRef = (...totalItems)
// console.log(totalItems);

const itemsRef = document.querySelectorAll('.item');
const itemUlRef = document.querySelectorAll('.item ul');

console.log(itemsRef);
console.log(itemUlRef);

// const titelRef = itemsRef.children[0].textContent;
// console.log(`Категория: ${titelRef}`);

// console.log(`Количество элементов:${itemUlRef.children.length}`);
// // const listRef = itemRef.children[1];
// // console.log(listRef);

itemsRef.forEach(item =>
  console.log(`Категория:${item.firstElementChild.textContent}`),
);
itemUlRef.forEach(item =>
  console.log(`Количество элементов:${item.children.length}`),
);
