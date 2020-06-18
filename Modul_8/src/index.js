import users from './gallery-items.js';

// console.table(users);
const galleryRef = document.querySelector('.gallery');
const modalRef = document.querySelector('.lightbox');
const lightboxImageRef = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector(
  'button[data-action="close-lightbox"]',
);
// const closeModalOverlay = document.querySelector('.lightbox__overlay');

galleryRef.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
// closeModalOverlay.addEventListener('click', closeModal);
// console.log(event.target.nodeName);
// console.dir(lightboxImageRef.src);

const createGalery = user => {
  const conteinerRef = document.createElement('li');
  conteinerRef.classList.add('gallery__item');

  const linkRef = document.createElement('a');
  linkRef.classList.add('gallery__link');
  //   linkRef.href = user.original;

  const imgRef = document.createElement('img');
  imgRef.classList.add('gallery__image');
  imgRef.src = user.preview;
  imgRef.dataSource = user.original;
  imgRef.alt = user.description;

  conteinerRef.append(linkRef);
  linkRef.append(imgRef);
  return conteinerRef;
};

const galleryImages = users.map(user => createGalery(user));
galleryRef.append(...galleryImages);

function openModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  modalRef.classList.add('is-open');
  lightboxImageRef.src = event.target.dataSource;
  // console.log(lightboxImageRef.src);
}

function closeModal(event) {
  modalRef.classList.remove('is-open');
  lightboxImageRef.src = '';
  // console.log(lightboxImageRef.src);
}
