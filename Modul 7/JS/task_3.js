const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// console.table(images);

const createGalery = image => {
  const conteinerRef = document.createElement('li');

  const ImageAltRef = document.createElement('img');
  ImageAltRef.src = image.url;
  ImageAltRef.alt = image.alt;
  // console.dir(ImageAltRef);

  conteinerRef.append(ImageAltRef);

  return conteinerRef;
};
const galleryImages = images.map(image => createGalery(image));

const galleryList = document.querySelector('#gallery');

galleryList.append(...galleryImages);
